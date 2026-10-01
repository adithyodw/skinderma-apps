#!/usr/bin/env python3
"""SKINDERMA v2 local backend. Binds 127.0.0.1:8787 only. Never 0.0.0.0."""
import json
import os
import time
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

HOST, PORT = "127.0.0.1", 8787
ROOT = os.path.normpath(os.path.join(os.path.dirname(__file__), "..", "public", "v2"))
STEPS = [
    "Queued on local backend",
    "Loaded playbook",
    "Checked room schedule",
    "Ran task against clinic systems",
    "Wrote the chart note",
    "Task complete",
]


class Handler(BaseHTTPRequestHandler):
    def log_message(self, fmt, *args):
        return

    def _send(self, code, body, ctype):
        data = body if isinstance(body, bytes) else body.encode()
        self.send_response(code)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def do_GET(self):
        path = self.path.split("?", 1)[0]
        if path == "/api/health":
            self._send(200, '{"ok":true}', "application/json")
            return
        if path not in ("/", "/index.html"):
            self._send(404, "not found", "text/plain")
            return
        file = os.path.join(ROOT, "index.html")
        if not os.path.isfile(file):
            self._send(404, "missing index.html", "text/plain")
            return
        with open(file, "rb") as handle:
            self._send(200, handle.read(), "text/html; charset=utf-8")

    def do_POST(self):
        if self.path.split("?", 1)[0] != "/api/run":
            self._send(404, "not found", "text/plain")
            return
        length = int(self.headers.get("Content-Length", "0") or 0)
        raw = self.rfile.read(length) if length else b"{}"
        try:
            handle = json.loads(raw.decode() or "{}").get("handle", "@staff")
        except json.JSONDecodeError:
            handle = "@staff"
        self.send_response(200)
        self.send_header("Content-Type", "text/event-stream")
        self.send_header("Cache-Control", "no-cache")
        self.end_headers()
        for line in STEPS:
            self.wfile.write(f"data: {handle}: {line}\n\n".encode())
            self.wfile.flush()
            time.sleep(0.45)


if __name__ == "__main__":
    ThreadingHTTPServer((HOST, PORT), Handler).serve_forever()

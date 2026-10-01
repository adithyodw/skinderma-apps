#!/bin/sh
# SKINDERMA v2 backend. Usage: ./v2/start.sh [--bg|--status|--stop]
set -eu
cd "$(dirname "$0")/.."
PIDFILE="v2/.server.pid"
PORT=8787
URL="http://127.0.0.1:${PORT}/api/health"

alive() {
  if command -v curl >/dev/null 2>&1; then
    curl -sf "$URL" >/dev/null 2>&1
    return $?
  fi
  python3 -c "import urllib.request; urllib.request.urlopen('$URL', timeout=1)" >/dev/null 2>&1
}

stop_port() {
  if command -v lsof >/dev/null 2>&1; then
    for p in $(lsof -ti tcp:${PORT} 2>/dev/null || true); do
      kill "$p" 2>/dev/null || true
    done
  fi
}

case "${1:-}" in
  --bg)
    if alive; then echo "already running on ${PORT}"; exit 0; fi
    python3 v2/server.py >/dev/null 2>&1 &
    echo $! > "$PIDFILE"
    sleep 0.4
    if alive; then echo "started pid $(cat "$PIDFILE")"; else echo "failed to start"; exit 1; fi
    ;;
  --status)
    if alive; then echo "live on ${PORT}"; exit 0; else echo "stopped"; exit 1; fi
    ;;
  --stop)
    if [ -f "$PIDFILE" ]; then
      kill "$(cat "$PIDFILE")" 2>/dev/null || true
      rm -f "$PIDFILE"
    fi
    stop_port
    echo "stopped"
    ;;
  *)
    exec python3 v2/server.py
    ;;
esac

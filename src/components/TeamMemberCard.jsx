import React from 'react';
import { Photo } from '../shared.jsx';

export function TeamMemberCard({ member, lang }) {
  return (
    <article className="team-card">
      <div className="team-card__media">
        {member.img ? (
          <Photo
            src={member.img}
            alt={member.name}
            accent={member.accent}
            ratio="3 / 4"
            width={360}
            height={480}
            sizes="(max-width: 768px) 50vw, 200px"
            objectPosition={member.photoPosition || 'center 20%'}
            style={{ width: '100%', height: '100%' }}
          />
        ) : null}
      </div>
      <div className="team-card__body">
        <h3 className="team-card__name">{member.name}</h3>
        <p className="team-card__role">{member.role[lang]}</p>
        <p className="team-card__expertise">{member.expertise[lang]}</p>
      </div>
    </article>
  );
}

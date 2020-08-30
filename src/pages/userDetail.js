import React, { useState, useEffect } from 'react';
import { URL, useStore } from '../store/globalContext';
import { useParams } from 'react-router-dom';
import { useGitHubApi } from '../services/dataFetching';

import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const UserDetail = () => {
  const { updateUser } = useStore();
  let { login } = useParams();
  const [{ isError, isLoading, data }, doFetch, dispatch] = useGitHubApi(
    {},
    `${URL}/${login}`
  );

  let {
    avatar_url,
    name,
    location,
    blog,
    followers,
    following,
    html_url,
  } = data;

  const [text, setText] = useState('');
  const [editable, setEditable] = useState(false);
  useEffect(() => {
    setText(name);
  }, [name]);

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      ...data,
      name: text,
    };
    dispatch(updateUser(newUser));
    setEditable(false);
  };

  return (
    <>
      {isError && (
        <div className="error-message">
          <span> Something went wrong</span>
        </div>
      )}
      {isLoading ? (
        <div className="spinner"></div>
      ) : (
        <div className="user-detail">
          <div className="avatar">
            <img src={avatar_url} alt="avatar" />
          </div>
          <div className="user-name">
            <span
              onClick={() => {
                setEditable(true);
              }}
              title="editable"
            >
              {' '}
              {name}
              <FontAwesomeIcon icon={faEdit} size="sm" />
              {editable && (
                <form onSubmit={onSubmit}>
                  <input
                    type="text"
                    value={text || ''}
                    onChange={(e) => setText(e.target.value)}
                    onBlur={onSubmit}
                    autoFocus
                  />{' '}
                </form>
              )}
            </span>
            <p>
              <span>from</span>
              <span title="editable">{location}</span>
            </p>
          </div>
          <div className="blog">
            <p>
              <a rel="noopener noreferrer" href={blog} target="_blank">
                blog{' '}
              </a>
            </p>
          </div>
          <div className="gitHub-account">
            <a rel="noopener noreferrer" href={html_url} target="_blank">
              gitHub account{' '}
            </a>
          </div>
          <div className="followers">
            <div>followers : {followers}</div>
            <div>following : {following}</div>
          </div>
        </div>
      )}
    </>
  );
};

import React, { useState } from "react";
import { css } from "@emotion/core";
import YouTube from "react-youtube";

const CardPlayer = ({ technique }) => {
  const [showPlayer, setShowPlayer] = useState(false);
  const [currentTechnique, setCurrentTechnique] = useState("primary");

  return (
    <div
      role="button"
      onKeyDown={() => {}}
      tabIndex={0}
      onClick={() => setShowPlayer(true)}
      css={css`
        :hover {
          cursor: pointer;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: center;
          & > div {
            width: 100%;
          }
        `}
      >
        {showPlayer ? (
          <YouTube
            videoId={technique[currentTechnique].videoId}
            opts={{
              height: "auto",
              width: "100%",
              playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
                mute: 1
              }
            }}
          />
        ) : (
          technique[currentTechnique].videoId && (
            <img
              alt={technique[currentTechnique].label}
              css={css`
                width: 100%;
                max-height: 150px;
              `}
              src={`https://img.youtube.com/vi/${technique[currentTechnique].videoId}/mqdefault.jpg`}
            />
          )
        )}
      </div>
      <div
        css={css`
          display: flex;
        `}
      >
        <button
          css={css`
            border: 0;
            padding: 0;
            flex: 1;
            padding: 16px;
            :hover {
              cursor: pointer;
            }
          `}
          onClick={() => setCurrentTechnique("primary")}
        >
          {technique.primary.label}
        </button>
        {technique.secondary && (
          <button
            css={css`
              border: 0;
              padding: 0;
              flex: 1;
              border-left: 1px solid #222;
              padding: 16px;
              :hover {
                cursor: pointer;
              }
            `}
            onClick={() => setCurrentTechnique("secondary")}
          >
            {technique.secondary.label}
          </button>
        )}
      </div>
    </div>
  );
};

export default CardPlayer;

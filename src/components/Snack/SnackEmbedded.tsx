import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

type SnackEmbeddedProps = {
  snackId: string;
};

export default function SnackEmbedded({ snackId }: SnackEmbeddedProps) {
  return (
    <>
      <a
        href={`https://snack.expo.dev/${snackId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="snack-link"
      >
        <img
          src={useBaseUrl("/img/snack.svg")}
          alt="Expo Snack"
          width="20"
          height="20"
        />
        Abrir no Expo Snack ↗️
      </a>

      <div
        data-snack-id={snackId}
        data-snack-platform="web"
        data-snack-preview="true"
        data-snack-files="true"
        data-snack-loading="lazy"
        data-snack-theme="light"
        className="snack"
      ></div>
      <script async src="https://snack.expo.dev/embed.js"></script>
    </>
  );
}

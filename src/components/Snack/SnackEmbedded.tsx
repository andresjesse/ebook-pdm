import React from "react";

type SnackEmbeddedProps = {
  snackId: string;
};

export default function SnackEmbedded({ snackId }: SnackEmbeddedProps) {
  return (
    <>
      <a href={`https://snack.expo.dev/${snackId}`}>Abrir no Snack</a>

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

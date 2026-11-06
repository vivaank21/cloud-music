export function MusicPreloader() {
  return (
    <div className="music-preloader" role="status" aria-live="polite">
      <div className="preloader-content">
        <div className="preloader-bars" aria-hidden="true">
          <i /><i /><i /><i /><i />
        </div>
        <span>Loading music...</span>
      </div>
    </div>
  );
}

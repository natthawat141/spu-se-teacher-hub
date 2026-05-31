import Image from "next/image";

type AppLoadingScreenProps = {
  exiting?: boolean;
  progressDurationMs?: number;
};

export function AppLoadingScreen({
  exiting = false,
  progressDurationMs = 1800
}: AppLoadingScreenProps) {
  return (
    <div
      className={`app-loading${exiting ? " app-loading-exit" : ""}`}
      role="presentation"
      aria-hidden={exiting}
    >
      <div className="app-loading-backdrop" aria-hidden="true">
        <div className="app-loading-glow" />
        <div className="app-loading-grid" />
      </div>

      <div className="app-loading-content">
        <div className="app-loading-emblem">
          <div className="app-loading-logo-frame">
            <Image
              src="/brand/spu-se-logo.png"
              alt=""
              width={80}
              height={80}
              className="app-loading-logo"
              priority
            />
          </div>
        </div>

        <div className="app-loading-copy">
          <p className="app-loading-eyebrow">School of Entrepreneurship</p>
          <h1 className="app-loading-title">คณะการสร้างเจ้าของธุรกิจ</h1>
          <p className="app-loading-subtitle">มหาวิทยาลัยศรีปทุม · Teacher Hub</p>
        </div>
      </div>

      <div className="app-loading-intro-bar" aria-hidden="true">
        <div
          className="app-loading-intro-bar-fill"
          style={{ animationDuration: `${progressDurationMs}ms` }}
        />
      </div>
    </div>
  );
}

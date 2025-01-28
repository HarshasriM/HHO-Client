import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../About/TeamSection.css';

function TeamSkeleton() {
  return (
    <div className="about-team text-center">
      <h1 className="about-title mb-2">
        <Skeleton width={150} />
      </h1>
      <div className="team" id="team">
        {[...Array(4)].map((_, index) => (
          <div style={{ color: "darkorange", height: "60vh",marginRight:"20px" }} key={index}>
            <h5 className="role mt-5 about-content">
              <Skeleton width={100} />
            </h5>
            <div className="profile-card">
              <div className="img">
                <Skeleton circle={true} height={120} width={120} />
              </div>
              <div className="caption">
                <h5 className="about-content">
                  <Skeleton width={120} />
                </h5>
                <h5 className="about-content">
                  <Skeleton width={80} />
                </h5>
                <p className="about-content">
                  <Skeleton width={100} />
                </p>
                <div className="social-links d-flex justify-content-center gap-5">
                  <Skeleton width={20} height={20}  />
                  <Skeleton width={20} height={20}  />
                  <Skeleton width={20} height={20} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamSkeleton;

import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../About/AboutContent.css';

function AboutContentSkeleton() {
  return (
    <div className="about-section">
      <div className="about-banner">
        <div className="text-center">
          <h1 className="about-title">
            <Skeleton width={500} height={100} />
          </h1>
          <figure className="text-center">
            <blockquote className="blockquote">
              <p className="about-content">
                <Skeleton count={2} />
              </p>
            </blockquote>
            <figcaption className="blockquote-footer">
              <Skeleton width={450} />
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="about-mission-vision mb-5 container">
        <div className="row">
          <div className="col col-md-6 col-12 about-img">
            <Skeleton height={300} />
          </div>
          <div className="col col-12 col-md-6">
            <h1 className="about-title">
              <Skeleton width={150} />
            </h1>
            <p className="about-content mt-3">
              <Skeleton count={4} />
            </p>
            <br />
            <h1 className="about-title">
              <Skeleton width={150} />
            </h1>
            <p className="about-content mt-3">
              <Skeleton count={4} />
            </p>
          </div>
        </div>
      </div>

      <div className="about-history text-center mt-5">
        <h1 className="about-title">
          <Skeleton width={250} />
        </h1>
        <p className="about-content">
          <Skeleton count={3} />
        </p>
        <p className="about-content">
          <Skeleton count={4} />
        </p>
      </div>
    </div>
  );
}

export default AboutContentSkeleton;

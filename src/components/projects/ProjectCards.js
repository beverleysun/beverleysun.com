import React from "react";
import RepoCard from "react-repo-card";

export default function ProjectCards({ className = "" }) {
  return (
    <div className={className}>
      <RepoCard username="beverleysun" repository="Quinzical"></RepoCard>
      <RepoCard
        username="WeRateYou"
        repository="WeRateYou.github.io"
      ></RepoCard>
      <RepoCard username="beverleysun" repository="beverleysun.com"></RepoCard>
      <RepoCard
        username="beverleysun"
        repository="visibility-checker"
      ></RepoCard>
      <RepoCard
        username="beverleysun"
        repository="dfsconstruction.co.nz"
      ></RepoCard>
    </div>
  );
}

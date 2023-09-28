"use client";
import { useCallback } from "react";

import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { type Engine } from "tsparticles-engine";

import starsParticles from "@/configs/stars-particles";

export function ParticlesTag() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      className="fixed -z-10"
      id="tsparticles"
      init={particlesInit}
      options={starsParticles}
    />
  );
}

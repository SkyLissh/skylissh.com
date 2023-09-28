import {
  IconBrandDiscord,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandTwitch,
  IconBrandX,
  IconBrandYoutube
} from "@tabler/icons-react";
import Image from "next/image";

import { Button } from "@/components/Button";
import { ParticlesTag } from "@/components/ParticlesTag";

import cloudBack from "../../../public/cloud_back.svg";
import cloudFront from "../../../public/cloud_front.svg";

export default function Social() {
  return (
    <>
      <ParticlesTag />
      <main className="container my-16 mx-auto flex flex-col gap-8 items-center justify-center">
        <div className="rounded-full w-48 h-48 relative overflow-hidden border border-yellow-500">
          <Image src={"/profile.jpg"} alt="Profile Picture" priority fill sizes="100vw" />
        </div>
        <h1 className="text-2xl font-bold">SkyLissh</h1>
        <p className="text-center">
          VTuber que se la pasa con la mente en la <br /> luna y las estrellas ✨🌘
        </p>
        <section className="flex flex-col gap-4 px-4 w-full md:w-auto">
          <Button color="purple" href="https://twitch.tv/SkyLissh">
            <IconBrandTwitch />
            Twitch
          </Button>
          <Button color="fuchsia" href="https://instagram.com/SkyLissh">
            <IconBrandInstagram />
            Instagram
          </Button>
          <Button color="blue" href="https://twitter.com/SkyLissh">
            <IconBrandX />
            Twitter
          </Button>
          <Button color="red" href="https://www.youtube.com/@SkyLissh">
            <IconBrandYoutube />
            YouTube
          </Button>
          <Button color="purple" href="https://discord.gg/DvdY9N8uhU">
            <IconBrandDiscord />
            Discord
          </Button>
          <Button color="fuchsia" href="https://tiktok.com/@SkyLissh">
            <IconBrandTiktok />
            TikTok
          </Button>
        </section>
      </main>
      <footer></footer>
      <div className="fixed -left-32 -bottom-10 -z-10">
        <Image src={cloudBack} alt="Could Back" />
      </div>
      <div className="fixed -right-[28rem] md:-right-8 -bottom-8 -z-10">
        <Image src={cloudFront} alt="Cloud Front" />
      </div>
    </>
  );
}

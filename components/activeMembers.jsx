"use client";

import React from "react";
import Image from "next/image";
import SectionHeader from "./sectionHeader";
import Container from "./spacing";

export default function ActiveMembers({
  label = "Selected",
  title = "Active Members",
  subtitle = "Our commitment is to use active ingredients of natural origin wherever possible without compromising the quality of the formulas and the results.",
  members = [
    {
      id: 1,
      image: "https://ik.imagekit.io/75zj3bigp/Testimonial.png",
      alt: "Active Member 1",
    },
    {
      id: 2,
      image: "https://ik.imagekit.io/75zj3bigp/Testimonial.png",
      alt: "Active Member 2",
    },
    {
      id: 3,
      image: "https://ik.imagekit.io/75zj3bigp/Testimonial.png",
      alt: "Active Member 3",
    },
  ],
}) {
  return (
    <Container variant="activeMembers">
      <section className="active-members">
        <SectionHeader
          className="active-members-header"
          label={label}
          title={title}
          subtitle={subtitle}
        />

        <div className="active-members__grid">
          {members.map((member) => (
            <div key={member.id} className="active-members__card flex  ">
              <Image
                src={member.image}
                alt={member.alt}
                width={400}
                height={600}
                className="active-members__image flex-1 "
              />
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}

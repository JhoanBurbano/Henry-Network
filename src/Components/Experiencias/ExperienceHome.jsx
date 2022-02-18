import React from "react";
import CrearExperience from "./CreateExperience";
import Layout from "../Layout/Layout";
import PostsExperiences from "./PostsExperiences";

export default function Experiences() {
  return (
    <Layout>
      <h1 className="layout__title">Experiencias</h1>
      <p className="layout__description">
        Acá vas a encontrar las experiencias de otros Henrys. ¡No estás solo,
        contactalos!
      </p>
      <CrearExperience />
      <PostsExperiences />
    </Layout>
  );
}

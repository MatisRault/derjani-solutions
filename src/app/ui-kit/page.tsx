'use client';

import React from 'react';
import { H1, H2, H3, H4, H5, H6, Paragraph, Lead, Small, Link, List, ListItem, Blockquote, Code, Strong, Em } from '@/components/ui/Typography';
import Button from '@/components/ui/Button';

const UIKitPage = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center">
          <H1 className="mb-4">Derjani Group UI Kit</H1>
          <Lead>Système de design complet avec palette bordeaux, typographie Montserrat et composants réutilisables</Lead>
        </div>

        {/* Color Palette */}
        <section>
          <H2 className="mb-8">Palette de couleurs</H2>
          
          
          <div className="space-y-6">
            <div>
              <H4 className="mb-4">Rouge Bordeaux</H4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="bg-bordeaux-100 p-4 rounded-lg text-center">
                  <div className="text-sm font-medium text-gray-900">100</div>
                  <div className="text-xs text-gray-600">#fce8e8</div>
                </div>
                <div className="bg-bordeaux-300 p-4 rounded-lg text-center">
                  <div className="text-sm font-medium text-gray-900">300</div>
                  <div className="text-xs text-gray-600">#f59c9c</div>
                </div>
                <div className="bg-bordeaux-500 p-4 rounded-lg text-center text-white">
                  <div className="text-sm font-medium">500</div>
                  <div className="text-xs">#6b0e0e</div>
                </div>
                <div className="bg-bordeaux-700 p-4 rounded-lg text-center text-white">
                  <div className="text-sm font-medium">700</div>
                  <div className="text-xs">#4a0a0a</div>
                </div>
                <div className="bg-bordeaux-900 p-4 rounded-lg text-center text-white">
                  <div className="text-sm font-medium">900</div>
                  <div className="text-xs">#2a0606</div>
                </div>
              </div>
            </div>

            <div>
              <H4 className="mb-4">Nuances de gris</H4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center border">
                  <div className="text-sm font-medium text-gray-900">50</div>
                  <div className="text-xs text-gray-600">#f9fafb</div>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg text-center">
                  <div className="text-sm font-medium text-gray-900">200</div>
                  <div className="text-xs text-gray-600">#e5e7eb</div>
                </div>
                <div className="bg-gray-500 p-4 rounded-lg text-center text-white">
                  <div className="text-sm font-medium">500</div>
                  <div className="text-xs">#6b7280</div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center text-white">
                  <div className="text-sm font-medium">700</div>
                  <div className="text-xs">#374151</div>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg text-center text-white">
                  <div className="text-sm font-medium">900</div>
                  <div className="text-xs">#111827</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section>
          <H2 className="mb-8">Typographie - Montserrat</H2>
          <div className="space-y-6">
            <div>
              <H1>Heading 1 - Titre principal</H1>
              <Small className="block mt-2">text-5xl md:text-6xl font-bold</Small>
            </div>
            <div>
              <H2>Heading 2 - Titre de section</H2>
              <Small className="block mt-2">text-4xl md:text-5xl font-semibold</Small>
            </div>
            <div>
              <H3>Heading 3 - Sous-titre</H3>
              <Small className="block mt-2">text-3xl md:text-4xl font-semibold</Small>
            </div>
            <div>
              <H4>Heading 4 - Titre de contenu</H4>
              <Small className="block mt-2">text-2xl md:text-3xl font-medium</Small>
            </div>
            <div>
              <H5>Heading 5 - Titre secondaire</H5>
              <Small className="block mt-2">text-xl md:text-2xl font-medium</Small>
            </div>
            <div>
              <H6>Heading 6 - Petit titre</H6>
              <Small className="block mt-2">text-lg md:text-xl font-medium</Small>
            </div>
            <div>
              <Lead>
                Texte d'introduction ou de présentation avec une taille plus importante pour attirer l'attention sur les informations clés.
              </Lead>
              <Small className="block mt-2">text-lg md:text-xl font-light</Small>
            </div>
            <div>
              <Paragraph>
                Paragraphe standard pour le contenu principal. Cette police Montserrat offre une excellente lisibilité et un style moderne adapté à l'image professionnelle de Derjani Group.
              </Paragraph>
              <Small className="block mt-2">text-base md:text-lg</Small>
            </div>
            <div>
              <Small>Texte de détail ou informations secondaires</Small>
              <Small className="block mt-2">text-sm</Small>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section>
          <H2 className="mb-8">Boutons</H2>
          
          <div className="space-y-8">
            {/* Primary Buttons */}
            <div>
              <H4 className="mb-4">Boutons principaux (Bordeaux)</H4>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="sm">Petit CTA</Button>
                <Button variant="primary" size="md">CTA Standard</Button>
                <Button variant="primary" size="lg">Grand CTA</Button>
                <Button variant="primary" disabled>CTA Désactivé</Button>
              </div>
            </div>

            {/* Secondary Buttons */}
            <div>
              <H4 className="mb-4">Boutons secondaires</H4>
              <div className="flex flex-wrap gap-4">
                <Button variant="secondary" size="sm">Secondaire</Button>
                <Button variant="secondary" size="md">Secondaire</Button>
                <Button variant="secondary" size="lg">Secondaire</Button>
              </div>
            </div>

            {/* Outline Buttons */}
            <div>
              <H4 className="mb-4">Boutons contour</H4>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" size="sm">Contour</Button>
                <Button variant="outline" size="md">Contour</Button>
                <Button variant="outline" size="lg">Contour</Button>
              </div>
            </div>

            {/* Ghost Buttons */}
            <div>
              <H4 className="mb-4">Boutons fantômes</H4>
              <div className="flex flex-wrap gap-4">
                <Button variant="ghost" size="sm">Fantôme</Button>
                <Button variant="ghost" size="md">Fantôme</Button>
                <Button variant="ghost" size="lg">Fantôme</Button>
              </div>
            </div>

            {/* Transparent Buttons */}
            <div>
              <H4 className="mb-4">Boutons transparents</H4>
              <div className="flex flex-wrap gap-4">
                <Button variant="transparent" size="sm">Transparent</Button>
                <Button variant="transparent" size="md">Transparent</Button>
                <Button variant="transparent" size="lg">Transparent</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Text Elements */}
        <section>
          <H2 className="mb-8">Éléments de texte</H2>
          
          <div className="space-y-8">
            {/* Links */}
            <div>
              <H4 className="mb-4">Liens</H4>
              <div className="space-y-2">
                <Paragraph>
                  Voici un <Link href="#">lien interne</Link> dans un paragraphe.
                </Paragraph>
                <Paragraph>
                  Et voici un <Link href="https://www.derjanigroup.com" external>lien externe</Link> vers le site web.
                </Paragraph>
              </div>
            </div>

            {/* Lists */}
            <div>
              <H4 className="mb-4">Listes</H4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <H5 className="mb-3">Liste non ordonnée</H5>
                  <List>
                    <ListItem>Construction de camps permanents</ListItem>
                    <ListItem>Structures en acier</ListItem>
                    <ListItem>Bâtiments préfabriqués</ListItem>
                    <ListItem>Routes et ponts</ListItem>
                  </List>
                </div>
                <div>
                  <H5 className="mb-3">Liste ordonnée</H5>
                  <List ordered>
                    <ListItem>Analyse des besoins client</ListItem>
                    <ListItem>Conception du projet</ListItem>
                    <ListItem>Réalisation des travaux</ListItem>
                    <ListItem>Livraison et suivi</ListItem>
                  </List>
                </div>
              </div>
            </div>

            {/* Text Styling */}
            <div>
              <H4 className="mb-4">Mise en forme du texte</H4>
              <div className="space-y-3">
                <Paragraph>
                  Texte avec <Strong>mise en gras</Strong> pour l'emphase importante.
                </Paragraph>
                <Paragraph>
                  Texte avec <Em>italique</Em> pour l'emphase légère.
                </Paragraph>
                <Paragraph>
                  Code inline : <Code>npm run dev</Code> pour démarrer le serveur.
                </Paragraph>
              </div>
            </div>

            {/* Blockquote */}
            <div>
              <H4 className="mb-4">Citations</H4>
              <Blockquote>
                "Depuis 1988, Derjani Group met son expertise au service des projets les plus ambitieux au Liban et à l'international."
              </Blockquote>
            </div>
          </div>
        </section>

        {/* Examples in context */}
        <section>
          <H2 className="mb-8">Exemples en contexte</H2>
          
          <div className="space-y-8">
            {/* Hero Section Example */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <H1 className="mb-4">Bienvenue chez Derjani Group</H1>
              <Lead className="mb-6">
                Depuis 1988, Derjani Group met son expertise au service des projets les plus ambitieux au Liban et à l'international.
              </Lead>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="lg">Découvrir nos services</Button>
                <Button variant="transparent" size="lg">Nous contacter</Button>
              </div>
            </div>

            {/* Card Example */}
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <H3 className="mb-3">Construction</H3>
              <Paragraph className="mb-4">
                Camps permanents et temporaires clé en main, structures acier, bâtiments préfabriqués, routes et ponts.
              </Paragraph>
              <Button variant="outline">En savoir plus</Button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default UIKitPage;
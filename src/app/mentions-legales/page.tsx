'use client';

import Navigation from '@/components/ui/Navigation';
import { PageBanner } from '@/components/ui/PageBanner';
import { H2, H3, Paragraph } from '@/components/ui/Typography';

export default function MentionsLegales() {
  const breadcrumbs = [
    { label: 'Accueil', href: '/' },
    { label: 'Mentions légales' }
  ];

  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Navigation />
      
      <PageBanner
        title="Mentions Légales"
        description="Informations légales et réglementaires concernant Derjani Group"
        backgroundImage="/legals.jpg"
        breadcrumbs={breadcrumbs}
      />
      
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8"
        >
        
          <div className="space-y-8">
            <section>
              <H2 className="text-bordeaux-500 mb-6 text-xl md:text-2xl">Informations légales</H2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <H3 className="text-gray-900 mb-3 text-lg md:text-lg font-semibold">Raison sociale</H3>
                  <Paragraph className="text-gray-700">
                    Derjani Group S.A.R.L<br />
                    Société à responsabilité limitée
                  </Paragraph>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <H3 className="text-gray-900 mb-3 text-lg md:text-lg font-semibold">Siège social</H3>
                  <Paragraph className="text-gray-700">
                    Beyrouth, Liban<br />
                    [Adresse complète à préciser]
                  </Paragraph>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <H3 className="text-gray-900 mb-3 text-lg md:text-lg font-semibold">Contact</H3>
                  <Paragraph className="text-gray-700">
                    Téléphone : +961 [numéro à préciser]<br />
                    Email : contact@derjanigroup.com
                  </Paragraph>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <H3 className="text-gray-900 mb-3 text-lg md:text-lg font-semibold">Numéro d'enregistrement</H3>
                  <Paragraph className="text-gray-700">
                    [Numéro d'enregistrement commercial au Liban à préciser]
                  </Paragraph>
                </div>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">Directeur de la publication</H2>
              <div className="bg-bordeaux-50 rounded-lg p-6">
                <Paragraph className="text-gray-700">
                  [Nom du directeur de publication]<br />
                  Gérant de Derjani Group S.A.R.L
                </Paragraph>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">Hébergement du site</H2>
              <div className="bg-gray-50 rounded-lg p-6">
                <Paragraph className="text-gray-700">
                  Ce site est hébergé par [Nom de l'hébergeur]<br />
                  [Adresse de l'hébergeur]<br />
                  [Pays d'hébergement]
                </Paragraph>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">Propriété intellectuelle</H2>
              <div className="space-y-4">
                <Paragraph className="text-gray-700">
                  L'ensemble de ce site relève de la législation libanaise et internationale sur le droit d'auteur et la propriété intellectuelle.
                </Paragraph>
                <Paragraph className="text-gray-700">
                  Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </Paragraph>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <Paragraph className="text-gray-700">
                    <strong>Important :</strong> La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                  </Paragraph>
                </div>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">Limitation de responsabilité</H2>
              <div className="space-y-4">
                <Paragraph className="text-gray-700">
                  Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
                </Paragraph>
                <Paragraph className="text-gray-700">
                  Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email en décrivant le problème de la manière la plus précise possible.
                </Paragraph>
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <Paragraph className="text-gray-700">
                    <strong>Clause de non-responsabilité :</strong> Derjani Group décline toute responsabilité concernant les informations diffusées sur ce site.
                  </Paragraph>
                </div>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">Droit applicable et juridiction compétente</H2>
              <div className="bg-bordeaux-50 rounded-lg p-6">
                <Paragraph className="text-gray-700">
                  Tout litige en relation avec l'utilisation du site www.derjanigroup.com est soumis au droit libanais. 
                  Il est fait attribution exclusive de juridiction aux tribunaux compétents de Beyrouth.
                </Paragraph>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">Liens hypertextes</H2>
              <div className="space-y-4">
                <Paragraph className="text-gray-700">
                  Les sites internet peuvent offrir des liens vers d'autres sites internet ou d'autres ressources disponibles sur Internet. 
                  Derjani Group ne dispose d'aucun moyen pour contrôler les sites en connexion avec ses sites internet.
                </Paragraph>
                <Paragraph className="text-gray-700">
                  Derjani Group ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit. 
                  Elle ne peut être tenue pour responsable de tout dommage, de quelque nature que ce soit, résultant du contenu de ces sites ou sources externes.
                </Paragraph>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">Collecte et traitement de données personnelles</H2>
              <div className="bg-blue-50 rounded-lg p-6">
                <Paragraph className="text-gray-700 mb-4">
                  Conformément aux dispositions de la loi libanaise et aux règlements internationaux sur la protection des données personnelles, 
                  vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition au traitement de vos données personnelles.
                </Paragraph>
                <Paragraph className="text-gray-700">
                  Pour plus d'informations, consultez notre <a href="/politique-confidentialite" className="text-bordeaux-500 hover:underline font-medium">Politique de Confidentialité</a>.
                </Paragraph>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
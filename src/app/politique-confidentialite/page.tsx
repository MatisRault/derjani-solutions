'use client';

import Navigation from '@/components/ui/Navigation';
import { PageBanner } from '@/components/ui/PageBanner';
import { H2, H3, Paragraph } from '@/components/ui/Typography';

export default function PolitiqueConfidentialite() {
  const breadcrumbs = [
    { label: 'Accueil', href: '/' },
    { label: 'Politique de confidentialité' }
  ];

  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Navigation />
      
      <PageBanner
        title="Politique de Confidentialité"
        description="Protection et respect de vos données personnelles"
        backgroundImage="/legals.jpg"
        breadcrumbs={breadcrumbs}
      />
      
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        
          <div className="space-y-8">
            <section>
              <Paragraph className="text-gray-700 mb-4">
                <strong>Dernière mise à jour :</strong> [Date à préciser]
              </Paragraph>
              <Paragraph className="text-gray-700 mb-8">
                Derjani Group S.A.R.L (« nous », « notre » ou « nos ») s'engage à protéger et respecter votre vie privée. 
                Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles.
              </Paragraph>
            </section>

            <section>
              <H2 className="text-bordeaux-500 mb-6 text-xl md:text-2xl">1. Informations que nous collectons</H2>
              
              <div className="mb-8">
                <H3 className="text-gray-900 mb-4 text-lg md:text-lg font-semibold">Informations que vous nous fournissez directement :</H3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Nom, prénom et informations de contact (adresse email, numéro de téléphone)</li>
                  <li>Informations sur votre entreprise (nom, secteur d'activité, taille)</li>
                  <li>Messages et communications que vous nous envoyez</li>
                  <li>Informations contenues dans les formulaires de contact ou de demande de devis</li>
                </ul>
              </div>

              <div>
                <H3 className="text-gray-900 mb-4 text-lg md:text-lg font-semibold">Informations collectées automatiquement :</H3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Adresse IP et données de localisation générale</li>
                  <li>Type de navigateur et système d'exploitation</li>
                  <li>Pages visitées et durée des sessions</li>
                  <li>Données de navigation (cookies et technologies similaires)</li>
                </ul>
              </div>
            </section>

          <section className="border-t border-gray-200 pt-8">
            <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">2. Comment nous utilisons vos informations</H2>
            <Paragraph className="text-gray-700 mb-4">
              Nous utilisons vos informations personnelles pour :
            </Paragraph>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Répondre à vos demandes de renseignements et de devis</li>
              <li>Vous fournir nos services et améliorer notre site web</li>
              <li>Vous envoyer des informations sur nos services (avec votre consentement)</li>
              <li>Analyser l'utilisation de notre site pour l'améliorer</li>
              <li>Respecter nos obligations légales et réglementaires</li>
              <li>Protéger nos droits et prévenir la fraude</li>
            </ul>
          </section>

          <section>
            <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">3. Base légale du traitement</H2>
            <Paragraph className="text-gray-700 mb-4">
              Nous traitons vos données personnelles sur la base de :
            </Paragraph>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Consentement :</strong> Lorsque vous acceptez de recevoir nos communications marketing</li>
              <li><strong>Exécution d'un contrat :</strong> Pour fournir les services que vous demandez</li>
              <li><strong>Intérêt légitime :</strong> Pour améliorer nos services et notre site web</li>
              <li><strong>Obligation légale :</strong> Pour respecter les réglementations applicables</li>
            </ul>
          </section>

          <section>
            <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">4. Partage de vos informations</H2>
            <Paragraph className="text-gray-700 mb-4">
              Nous ne vendons, ne louons ni ne partageons vos informations personnelles avec des tiers, sauf dans les cas suivants :
            </Paragraph>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Avec votre consentement explicite</li>
              <li>Avec nos fournisseurs de services (hébergement, analytics) sous contrat de confidentialité</li>
              <li>Pour respecter une obligation légale ou une décision de justice</li>
              <li>Pour protéger nos droits, notre propriété ou notre sécurité</li>
            </ul>
          </section>

          <section>
            <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">5. Transferts internationaux de données</H2>
            <Paragraph className="text-gray-700">
              Vos données peuvent être transférées et stockées dans des pays en dehors du Liban. 
              Nous nous assurons que ces transferts respectent les standards de protection appropriés conformément aux réglementations applicables.
            </Paragraph>
          </section>

          <section>
            <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">6. Sécurité de vos données</H2>
            <Paragraph className="text-gray-700">
              Nous mettons en place des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données personnelles contre :
              la perte, l'utilisation abusive, l'accès non autorisé, la divulgation, l'altération et la destruction.
            </Paragraph>
          </section>

          <section>
            <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">7. Conservation des données</H2>
            <Paragraph className="text-gray-700">
              Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, 
              ou selon les exigences légales applicables. En règle générale :
            </Paragraph>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-4">
              <li>Données de contact : 3 ans après le dernier contact</li>
              <li>Données de navigation : 13 mois maximum</li>
              <li>Données contractuelles : durée du contrat + 5 ans</li>
            </ul>
          </section>

          <section>
            <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">8. Vos droits</H2>
            <Paragraph className="text-gray-700 mb-4">
              Vous disposez des droits suivants concernant vos données personnelles :
            </Paragraph>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Droit d'accès :</strong> Obtenir une copie de vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> Corriger des données inexactes ou incomplètes</li>
              <li><strong>Droit d'effacement :</strong> Demander la suppression de vos données</li>
              <li><strong>Droit à la limitation :</strong> Limiter le traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré</li>
              <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
              <li><strong>Droit de retrait du consentement :</strong> Retirer votre consentement à tout moment</li>
            </ul>
            
            <Paragraph className="text-gray-700 mt-4">
              Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@derjanigroup.com" className="text-bordeaux-500 hover:underline">contact@derjanigroup.com</a>
            </Paragraph>
          </section>

          <section>
            <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">9. Cookies et technologies similaires</H2>
            <Paragraph className="text-gray-700 mb-4">
              Notre site utilise des cookies pour :
            </Paragraph>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Améliorer le fonctionnement de notre site</li>
              <li>Analyser le trafic et les performances</li>
              <li>Personnaliser votre expérience</li>
            </ul>
            <Paragraph className="text-gray-700 mt-4">
              Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.
            </Paragraph>
          </section>

          <section>
            <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">10. Modifications de cette politique</H2>
            <Paragraph className="text-gray-700">
              Nous pouvons mettre à jour cette politique de confidentialité de temps en temps. 
              La version mise à jour sera publiée sur cette page avec la date de dernière modification.
            </Paragraph>
          </section>

          <section>
            <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">11. Nous contacter</H2>
            <Paragraph className="text-gray-700">
              Pour toute question concernant cette politique de confidentialité ou vos données personnelles, contactez-nous :
            </Paragraph>
            <div className="mt-4 text-gray-700">
              <p><strong>Derjani Group S.A.R.L</strong></p>
              <p>Email : <a href="mailto:contact@derjanigroup.com" className="text-bordeaux-500 hover:underline">contact@derjanigroup.com</a></p>
              <p>Adresse : Beyrouth, Liban</p>
              <p>Téléphone : +961 [numéro à préciser]</p>
            </div>
          </section>
          </div>
        </div>
      </div>
    </div>
  );
}
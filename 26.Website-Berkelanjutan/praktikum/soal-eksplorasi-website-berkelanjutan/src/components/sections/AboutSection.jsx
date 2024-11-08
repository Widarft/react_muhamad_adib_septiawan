import React from "react";

const AboutSection = () => {
  return (
    <div>
      <section className="flex flex-col items-center justify-center w-full min-h-screen p-6 bg-green-50">
        <div className="max-w-7xl p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-semibold text-green-900 mb-4 text-center md:text-left">
            Tentang GreenTech
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4 text-center md:text-left">
            GreenTech adalah perusahaan yang berdedikasi untuk menciptakan
            solusi teknologi yang ramah lingkungan dan berkelanjutan. Kami
            berkomitmen untuk mengurangi jejak karbon dan mendorong penggunaan
            energi bersih. Dengan fokus pada inovasi dan tanggung jawab
            lingkungan, kami berusaha menciptakan masa depan yang lebih hijau
            dan sehat.
          </p>

          <h3 className="text-2xl font-semibold text-green-800 mb-3 text-center md:text-left">
            Visi
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-4 text-center md:text-left">
            Menjadi pemimpin global dalam teknologi hijau yang mendukung
            keberlanjutan lingkungan dan kesejahteraan masyarakat. Kami ingin
            menginspirasi perubahan positif dalam cara kita menggunakan sumber
            daya alam melalui teknologi yang berkelanjutan dan inovatif.
          </p>

          <h3 className="text-2xl font-semibold text-green-800 mb-3 text-center md:text-left">
            Misi
          </h3>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-4 space-y-2 text-center md:text-left">
            <li>
              Mengembangkan solusi teknologi yang membantu mengurangi dampak
              negatif terhadap lingkungan.
            </li>
            <li>
              Mendorong penggunaan energi terbarukan dalam setiap aspek
              kehidupan masyarakat dan bisnis.
            </li>
            <li>
              Mendidik masyarakat tentang pentingnya keberlanjutan dan
              penggunaan teknologi ramah lingkungan.
            </li>
            <li>
              Berinovasi dalam setiap produk dan layanan untuk memastikan dampak
              positif terhadap bumi.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-green-800 mb-3 text-center md:text-left">
            Tujuan Kami
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-2 text-center md:text-left">
            Kami bertujuan untuk:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed space-y-2 text-center md:text-left">
            <li>
              Memperkenalkan produk dan solusi yang mampu menurunkan emisi
              karbon secara signifikan.
            </li>
            <li>
              Mengajak lebih banyak perusahaan dan individu untuk beralih ke
              teknologi berkelanjutan.
            </li>
            <li>
              Memberikan dampak positif bagi komunitas melalui program-program
              sosial dan lingkungan.
            </li>
            <li>
              Mendukung riset dan pengembangan untuk menciptakan solusi yang
              lebih baik bagi planet ini.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;

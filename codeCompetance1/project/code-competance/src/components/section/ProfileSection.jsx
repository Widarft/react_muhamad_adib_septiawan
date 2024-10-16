import React from "react";

const ProfileSection = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Personal Section */}
        <div>
          <h2 className="text-xl font-bold mb-2">PERSONAL</h2>
          <p className="text-sm">
            Perkenalkan nama saya Muhamad Adib Septiawan. Kelahiran Bogor, 22
            September 2001. Saat ini saya tinggal di Karawang, Jawa Barat.
          </p>
        </div>
        <div>
          <img
            src="./src/assets/image/personal.jpg"
            alt="Personal"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Pendidikan Section */}
        <div>
          <img
            src="./src/assets/image/pendidikan.jpg"
            alt="Pendidikan"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">PENDIDIKAN</h2>
          <p className="text-sm">
            Saat ini saya sedang menempuh pendidikan S1 Jurusan Sistem Informasi
            di Universitas Widyatama, Bandung.
          </p>
        </div>

        {/* Pengalaman Developer Section */}
        <div>
          <h2 className="text-xl font-bold mb-2">PENGALAMAN DEVELOPER</h2>
          <p className="text-sm">
            Di semester kemarin saya mengikuti MSIB Android Developer dan
            membuat project tentang pengelolaan kalori. Dan pada semester ini
            saya diberikan kesempatan untuk belajar di Alterra Academy sebagai
            Front-End Developer.
          </p>
        </div>
        <div>
          <img
            src="./src/assets/image/pengalaman.jpg"
            alt="Pengalaman Developer"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Hobi Section */}
        <div>
          <img
            src="./src/assets/image/hobi.jpg"
            alt="Hobi"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">HOBI</h2>
          <p className="text-sm">
            Kegiatan yang sangat saya sukai adalah olahraga basket dan juga
            traveling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;

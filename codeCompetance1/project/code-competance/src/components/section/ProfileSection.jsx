import React from "react";

const ProfileSection = () => {
  return (
    <div className="max-w-6xl mx-auto py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Personal Section */}
        <div className="flex flex-col justify-center py-8">
          <h2 className="text-xl font-bold mb-2">PERSONAL</h2>
          <p className="text-sm">
            Perkenalkan nama saya Muhamad Adib Septiawan. Kelahiran Bogor, 22
            September 2001. Saat ini saya tinggal di Karawang, Jawa Barat.
          </p>
        </div>
        <div className="py-8">
          <img
            src="./src/assets/image/personal.png"
            alt="Personal"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Pendidikan Section */}
        <div className="py-8">
          <img
            src="./src/assets/image/pendidikan.png"
            alt="Pendidikan"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col justify-center py-8">
          <h2 className="text-xl font-bold mb-2">PENDIDIKAN</h2>
          <p className="text-sm">
            Saat ini saya sedang menempuh pendidikan S1 Jurusan Sistem Informasi
            di Universitas Widyatama, Bandung.
          </p>
        </div>

        {/* Pengalaman Developer Section */}
        <div className="flex flex-col justify-center py-8">
          <h2 className="text-xl font-bold mb-2">PENGALAMAN DEVELOPER</h2>
          <p className="text-sm">
            Di semester kemarin saya mengikuti MSIB Android Developer dan
            membuat project tentang pengelolaan kalori. Dan pada semester ini
            saya diberikan kesempatan untuk belajar di Alterra Academy sebagai
            Front-End Developer.
          </p>
        </div>
        <div className="py-8">
          <img
            src="./src/assets/image/pengalaman.png"
            alt="Pengalaman Developer"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Hobi Section */}
        <div className="py-8">
          <img
            src="./src/assets/image/hobi.png"
            alt="Hobi"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col justify-center py-8">
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

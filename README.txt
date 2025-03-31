- UTS BACK END PROGRAMMING 24/25 -

Haloo! Selamat pagi, siang, sore atau malam bagi yang melihat file ini :>

Kami dari Kelompok 8, Kelas B, jurusan Teknik Informatika, fakultas FTI yang beranggotakan;
- Claudio Taffarel Santoso   [ 535240035 / TI-B ]
- Devin Giovano              [ 535240057 / TI-B ]
- Edbert Halim               [ 535240059 / TI-B ]
- Tegar Ning Izzaty          [ 535240170 / TI-B ]
- Wira Wahyu Nurhamdani      [ 535240184 / TI-B ]

Dalam repository GitHub ini, tertera source code kami, 
yang dibuat dalam upaya mereplika salah satu public API yaitu 
Zelda.fanapis.com  [ https://docs.zelda.fanapis.com/docs/ ]

Tujuan pembuatan source code ini adalah untuk memenuhi persyaratan
nilai UTS dari Mata Kuliah Back-End Programming angkatan 24/25


" Bagaimana cara memakainya? "


Dalam source code ini terdapat 11 endpoints, yang masing - masing
memiliki metode GET dan POST, berikut penggunaannya;

-> GET  :  Menarik informasi dari database MongoDB dalam format JSON
           contoh link API yang bisa digunakan:
           http://localhost:3000/zelda.fanapis.com/api/characters                     ( menunjukan semua data karakter )
           http://localhost:3000/zelda.fanapis.com/api/characters/:id                 ( mencari data karakter melalui id )
           http://localhost:3000/zelda.fanapis.com/api/characters?limit=x&page=x      ( mencari data karakter melalui limit dan pagination )
           http://localhost:3000/zelda.fanapis.com/api/characters/name/:name          ( mencari data karakter melalui name, NOTE: setiap spasi, diganti dengan "%20")

           format 4 link di atas berlaku untuk semua endpoints

-> POST :  Memposting data baru ke dalam database MongoDB dalam format JSON
           notes: isi harus sesuai data dalam schema yang sudah dideklarasikan di folder models


Sekian dari pengenalan project replika API kamii,
Terima Kasih sudah membaca, sehat selaluu!!
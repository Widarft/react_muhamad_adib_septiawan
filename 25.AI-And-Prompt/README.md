# Basic Model OpenAI dan Prompt Engineer di React

Pembelajar ini dimaksudkan untuk meningkatkan penggunaan basic model AI, dapat membangun aplikasi AI yang relevan, ikut ambil dalam menjadi bagian dari komunitas AI, dapat mengotimalkan output model AI, dan meningkatkan daya saing di bidang AI.

## Basic Model AI

Merupakan sebuah AI yang dapat digunakan untuk mempelajari pola-pola dari data kemudian mengeluarkan output sesuai dengan data yang diberikan. Model-model AI ada banyak berikut beberapa contohnya:

- **Supervised Learning Models**, model AI yang dilatih menggunakan data yang sudah diberi label. Model ini mempelajari hubungan antara input dan output berdasarkan data pelatihan. contohnya **Regresi Linear dan Logistik**, **Support Vector Machines (SVM)**, **Decision Trees** dan lainnya.
- **Unsupervised Learning Models**, digunakan untuk menemukan pola atau struktur dalam data yang tidak diberi label. Contohnya **K-Means Clustering** dan **Principal Component Analysis (PCA)**.
- **Reinforcement Learning Models**, Model ini belajar dengan berinteraksi dengan lingkungan dan memperoleh umpan balik berupa penghargaan atau hukuman. Contohnya Q-Learning dan Deep Q-Networks (DQN).
- **Artificial Neural Networks - ANN**, model yang terinspirasi oleh cara kerja otak manusia, yang terdiri dari lapisan-lapisan neuron untuk pemrosesan informasi. Contohnya Multilayer Perceptron (MLP) dan Convolutional Neural Networks (CNN).
- **Model Generatif**, digunakan untuk menghasilkan data baru yang mirip dengan data pelatihan, seperti teks, gambar, atau suara. Contohnya Generative Adversarial Networks (GANs) dan Variational Autoencoders (VAEs).
- **Natural Language Processing** - NLP, digunakan untuk memahami, menghasilkan, dan memproses bahasa manusia. Contohnya GPT (Generative Pretrained Transformer) dan BERT (Bidirectional Encoder Representations from Transformers).
- **Model Vision**, digunakan untuk pemrosesan dan pemahaman data visual (gambar, video). Contohnya CNN (Convolutional Neural Networks) dan YOLO (You Only Look Once).
- **Large Language Models** - LLMs, varian dari model transformer yang sangat besar, seperti GPT, yang dirancang untuk memahami dan menghasilkan teks dalam skala besar. Contohnya GPT-3, GPT-4 dan PaLM (Pathways Language Model).

Khusus pada modul ini mempelajari kategori model Generative dan Large Language Models (LLMs), dengan fokus utama pada pemrosesan bahasa alami (NLP) dan berbagai aplikasi terkait seperti **Davinci** (OpenAI) dan **Gemini 1.5** (Google DeepMind)

## Basic Prompt Engineer

Prompt Engineer adalah suatu teknik yang digunakan dengan cara memberikan perintah atau prompt kepada model agar output yang dikeluarkan oleh model sesuai dengan keinginan kita. Berikut langkah langkah untuk membuat prompt yang baik

1. Tentukan tujuan dengan jelas.
2. Sertakan informasi atau konteks yang relevan.
3. Tentukan format dan kriteria output.
4. Minta model untuk mengakses atau menggabungkan informasi dari berbagai sumber (sesuai dengan kapasitasnya).
5. Berikan instruksi lanjutan atau analisis lebih mendalam jika perlu.
6. Tentukan batasan atau tindak lanjut.

Dengan begitu akan meningkatkan model AI untuk memberikan hasil yang lebih tepat dan sesuai harapan.

## Settingan untuk AI

- `temperature` = Output akan kreatif tetapi tetap koheren.
- `max_tokens` = Batas panjang output.
- `top_p` = Pemilihan token dari distribusi probabilitas yang lebih terbatas.
- `top_k` = Menentukan jumlah token terbaik yang akan dipertimbangkan oleh model untuk memilih kata selanjutnya
- `frequency_penalty` = Mengurangi pengulangan kata.
- `presence_penalty` = Mendorong variasi kata dalam teks.
- `stop` = Model akan berhenti ketika menghasilkan kata "END" atau "`/n`".

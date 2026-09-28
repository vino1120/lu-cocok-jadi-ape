let pertanyaanSekarang = 1;


function pilihJawaban(jawaban) {

    // =========================
    // PERTANYAAN 2
    // =========================

    if (pertanyaanSekarang === 1) {

        pertanyaanSekarang = 2;

        document.querySelector(".emoji").textContent = "💭";

        document.querySelector(".question-number").textContent =
            "Pertanyaan 2 dari 5";

        document.querySelector("h1").textContent =
            "Lu Kalo Lagi Nongkrong Suka Jajan Apaan?";

        document.querySelector(".options").innerHTML = `

            <button onclick="pilihJawaban('a')">
                GA JAJAN
            </button>

            <button onclick="pilihJawaban('b')">
                Liatin orang jajan doang
            </button>

            <button onclick="pilihJawaban('c')">
                Gigitin kuku
            </button>

            <button onclick="pilihJawaban('d')">
                Main HP sambil nahan laper
            </button>

            <button onclick="pilihJawaban('e')">
                Gapunya duit
            </button>

        `;

        return;
    }


    // =========================
    // PERTANYAAN 3
    // =========================

    if (pertanyaanSekarang === 2) {

        pertanyaanSekarang = 3;

        document.querySelector(".emoji").textContent = "💔";

        document.querySelector(".question-number").textContent =
            "Pertanyaan 3 dari 5";

        document.querySelector("h1").textContent =
            "Apa Status Lu Sekarang?";

        document.querySelector(".options").innerHTML = `

            <button onclick="pilihJawaban('a')">
                Gamon
            </button>

            <button onclick="pilihJawaban('b')">
                KANDASS
            </button>

            <button onclick="pilihJawaban('c')">
                KANDAS LAGI
            </button>

            <button onclick="pilihJawaban('d')">
                ALWAYS KANDASS
            </button>

            <button onclick="pilihJawaban('e')">
                YAHAHAHHA KANDAS
            </button>

        `;

        return;
    }


    // =========================
    // PERTANYAAN 4
    // =========================

    if (pertanyaanSekarang === 3) {

        pertanyaanSekarang = 4;

        document.querySelector(".emoji").textContent = "⚖️";

        document.querySelector(".question-number").textContent =
            "Pertanyaan 4 dari 5";

        document.querySelector("h1").textContent =
            "Berapa BB Lu?";

        document.querySelector(".options").innerHTML = `

            <button onclick="pilihJawaban('a')">
                63kg
            </button>

            <button onclick="pilihJawaban('b')">
                114kg
            </button>

            <button onclick="pilihJawaban('c')">
                125kg
            </button>

            <button onclick="pilihJawaban('d')">
                300kg
            </button>

            <button onclick="pilihJawaban('e')">
                123kg
            </button>

        `;

        return;
    }


    // =========================
    // PERTANYAAN 5
    // =========================

    if (pertanyaanSekarang === 4) {

        pertanyaanSekarang = 5;

        document.querySelector(".emoji").textContent = "💀";

        document.querySelector(".question-number").textContent =
            "Pertanyaan 5 dari 5";

        document.querySelector("h1").textContent =
            "Kalau punya waktu luang 5 jam, lu bakal ngapain?";

        document.querySelector(".options").innerHTML = `

            <button onclick="pilihJawaban('a')">
                Liatin Mantan Sama Cewe Barunya
            </button>

            <button onclick="pilihJawaban('b')">
                Mikirin Mantan
            </button>

            <button onclick="pilihJawaban('c')">
                DM-an Sama Cewe Barunya Mantan
            </button>

            <button onclick="pilihJawaban('d')">
                Push Up 2000x
            </button>

            <button onclick="pilihJawaban('e')">
                Ngaji
            </button>

        `;

        return;
    }


    // =========================
    // HASIL AKHIR
    // =========================

    if (pertanyaanSekarang === 5) {

        tampilkanHasil();

        return;
    }
}


function tampilkanHasil() {

    document.querySelector(".emoji").textContent = "💔";

    document.querySelector(".question-number").textContent =
        "HASIL TES";

    document.querySelector("h1").textContent =
        "SELAMAT LU JUARA 1 LOMBA KANDAS KANDASANN HAHAHA";

    document.querySelector(".options").innerHTML = `

        <p class="hasil-text">
            <br><br>
            <strong>
                Hidup lu memiliki hubungan yang sangat amat erat
                dengan kata "KANDAS".
            </strong>
            <br><br>
            Jangan menyerah. Mungkin dia memang bukan jodoh lu.
            Atau mungkin... lu aja yang kurang beruntung. 🗿
        </p>

        <button onclick="location.reload()">
            🔄 COBA LAGI
        </button>

    `;
}
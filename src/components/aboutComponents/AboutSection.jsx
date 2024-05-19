import React from "react";
import img from "../../images/medical-data-type.jpg";
import kayısı from "../../images/kayısı2.jpeg";

function aboutSection() {
    return (
        <div className="h-full flex items-center flex-col  ">
            <div className="container text-center p-10 rounded-sm">
                <div>
                    <h1 className="text-5xl font-nameFont uppercase tracking-widest font-light text-second text-secondSectionColor mb-12">
                        Öğrenim bilgileri
                    </h1>
                </div>
                <div className="mt-10 flex flex-col gap-5 justify-center">
                    <div className="info-box flex flex-row basis-2/4 ">
                        <div>
                            <h1 className="font-headersTitle font-bold text-2xl uppercase">
                                Doktora
                            </h1>
                            <p>
                                FIRAT ÜNİVERSİTESİ/FEN BİLİMLERİ
                            ENSTİTÜSÜ/ELEKTRİK-ELEKTRONİK MÜHENDİSLİĞİ
                            TEKNOLOJİLERİ (DR)
                            </p>
                            <p>
                                Tez Adı:Medikal veri setleri için yeni bir aşırı
                                öğrenme makinesi otomatik kodlayıcı tasarımı
                                (2022)
                            </p>
                            <p>Tez Danışmanı:(PROF. DR. ABDULKADİR ŞENGÜR)</p>
                        </div>
                    </div>
                    <div className="info-box  h-auto">
                        <h1 className="font-headersTitle font-bold text-2xl uppercase mb-5">
                            Yüksek Lisans
                        </h1>
                        <p>
                            FIRAT ÜNİVERSİTESİ/FEN BİLİMLERİ
                            ENSTİTÜSÜ/ELEKTRİK-ELEKTRONİK MÜHENDİSLİĞİ
                            TEKNOLOJİLERİ (YL) (TEZLİ)
                        </p>
                        <p>
                            Tez Adı:Kayısı yapraklarının evrişimsel sinir ağları
                            kullanılarak sınıflandırılması (2017)
                        </p>
                        <p>Tez Danışmanı:(PROF. DR. ABDULKADİR ŞENGÜR)</p>
                    </div>

                    <div className="info-box flex basis-2/4 flex-col ">
                        <h1 className="font-headersTitle font-bold text-2xl uppercase">
                            Lisans
                        </h1>
                        <p>
                            İNÖNÜ ÜNİVERSİTESİ <br />
                            MÜHENDİSLİK FAKÜLTESİ <br />
                            BİLGİSAYAR MÜHENDİSLİĞİ BÖLÜMÜ/BİLGİSAYAR
                            MÜHENDİSLİĞİ PR
                        </p>
                    </div>
                    <div className="info-box flex flex-col ">
                        <h1 className="font-headersTitle font-bold text-2xl uppercase">
                            Lisans
                        </h1>
                        <p>
                            FIRAT ÜNİVERSİTESİ <br />
                            TEKNİK EĞİTİM FAKÜLTESİ <br />
                            BİLGİSAYAR EĞİTİMİ BÖLÜMÜ/BİLGİSAYAR ÖĞRETMENLİĞİ PR
                        </p>
                    </div>
                </div>
                
                
            </div>
            <div className="container text-center p-10 rounded-sm">
                <div>
                    <h1 className="text-5xl font-nameFont uppercase tracking-widest font-light text-second text-secondSectionColor mb-12">
                        İş hayatı
                    </h1>
                </div>
                <div className="mt-10 flex flex-col gap-5 justify-center">
                    <div className="info-box flex flex-row basis-2/4 ">
                        <div>
                            <h1 className="font-headersTitle font-bold text-2xl uppercase">
                            [2024]  - [Devam Ediyor]
                            </h1>
                            <p>
                            [İnönü Üniversitesi / Mühendislik Fakültesi / Bilgisayar Mühendisliği] (DR)
                            </p>
                            
                            <p>[Dr. Öğr. Üyesi]</p>
                        </div>
                    </div>
                    <div className="info-box  h-auto">
                        <h1 className="font-headersTitle font-bold text-2xl uppercase mb-5">
                        [2023]  - [2024]
                        </h1>
                        <p>
                        [OSTİM Teknik Üniversitesi / Mühendislik Fakültesi / Yazılım Mühendisliği]
                        </p>
                        <p>
                        [Dr. Öğr. Üyesi]
                        </p>
                        
                    </div>

                    <div className="info-box flex basis-2/4 flex-col ">
                        <h1 className="font-headersTitle font-bold text-2xl uppercase">
                        [2013]  - [2023]
                        </h1>
                        <p>
                        [Milli Eğitim Bakanlığı]
                        </p>
                        <p>
                        [Uzm. Öğretmen]
                        </p>
                    </div>
                    
                </div>
                
                
            </div>
        </div>
    );
}

export default aboutSection;

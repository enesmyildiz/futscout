# FutScout — Transfermarkt‑style Player Finder

**Live Demo:** https://enesmyildiz.github.io/futscout/  
**Repo:** https://github.com/enesmyildiz/futscout

![stack](https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JS-informational)
![backend](https://img.shields.io/badge/backend-none-green)
![license](https://img.shields.io/badge/license-MIT-blue)
![status](https://img.shields.io/badge/last_update-2025-08-29-brightgreen)

FutScout; futbolcuları **isim, mevki, yaş, uyruk, kulüp** ve **piyasa değeri** filtreleriyle aramanı sağlar. **Çoklu seçim**, **çift yaş slider’ı**, **detay modali** ve **CSV/JSON** desteğiyle tamamen **statik** ve **GitHub Pages** ile uyumlu çalışır.

## ✨ Features
- Çoklu seçim filtreleri: **Uyruk** ve **Kulüp** (birden fazla seçim).
- **Çift sürgülü** yaş filtresi, değer (€m) aralığı ve sıralama.
- **Oyuncu detay paneli:** sözleşme, boy/kilo, tercih edilen ayak, temel istatistikler.
- **Görseller:** Wikipedia/FlagCDN’den otomatik (ya da telifsiz yerel SVG avatarlar).
- **Export CSV / Import JSON** (backend yok).

## 🚀 Quick Start
1. Bu projeyi klonla veya indir:  
   ```bash
   git clone https://github.com/enesmyildiz/futscout
   ```
2. Yerelde `index.html`’i aç veya **Settings → Pages**’ten `main / (root)` ile yayına al.
3. (Opsiyonel) `app.js` içindeki `PLAYERS` dizisine oyuncu ekle/güncelle.

## 🧩 Data Model
```js
{
  id, name, position, birth_year, age, nationality, club, value_m,
  preferred_foot, height_cm, weight_kg, contract_until,
  stats: { apps, goals, assists }
}
```

## 🔄 Güncelleme (Kulüp Düzeltme)
- **Hızlı düzeltme:** `app.js` → ilgili oyuncunun `club` alanını değiştir → commit.
- **Toplu düzeltme:** JSON import.
- **Otomatik güncelleme sürümü:** `futscout-wiki-updater` branch’inde **Güncelle (Wiki)** butonu.

## 🗺️ Roadmap
- Virtualized list, preset filtreler, mobil ince ayar, performans optimizasyonu.

## 📸 Screenshot
_(screenshots/hero.png ekleyin)_

## 📄 License
MIT

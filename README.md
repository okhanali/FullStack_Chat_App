# 💬 Anlık Chat (Real-time Room-based Chat App)

React, Node.js, Express, TypeScript, Tailwind CSS ve Socket.io kullanılarak geliştirilmiş, full-stack, oda tabanlı, modüler ve yüksek performanslı gerçek zamanlı mesajlaşma uygulaması.

![Uygulama Tanıtım GIF](./client/public/chatfsdemo.gif)

---

## 🚀 Öne Çıkan Özellikler

- **Oda Tabanlı Mesajlaşma:** Kullanıcılar belirledikleri kullanıcı adı ve oda kodu ile anında sohbet odalarına katılabilir.
- **Gerçek Zamanlı Çift Yönlü İletişim:** Socket.io Event-driven mimarisi ile anlık mesaj iletimi ve oda içi yayın (`broadcast`).
- **Canlı Bağlantı Durumu:** WebSocket bağlantı durumunu (Canlı / Kesildi) anlık olarak gösteren gösterge.
- **Atomic & Modüler Bileşen Mimarisi (Frontend):**
  - **`FormField`:** Tekrar kullanılabilir, erişilebilir ve tip güvenli form girdileri.
  - **`MessageBubble`:** Gönderen, alıcı ve sistem mesajlarını dinamik olarak ayrıştıran mesaj balonları.
  - **`MessageInput`:** Form state'ini kendi içinde izole eden ve gereksiz re-render'ları önleyen mesaj girdi alanı.
- **Temiz Mimarili Sunucu (Backend):**
  - Express.js v5 ve Socket.io entegrasyonu.
  - Handler & Controller katmanlarıyla modüler event yönetimi.
  - `tsx` ile super-fast TypeScript çalıştırma ortamı.
- **Tam Tip Güvenliği (End-to-End Type Safety):** İstemci ve sunucu arasında paylaşılan katı TypeScript (`Strict Mode`) tip tanımlamaları.

---

## 🛠️ Kullanılan Teknolojiler

### **Frontend**

- **Framework & Language:** React 19, TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Real-time Client:** Socket.io Client
- **Build Tool:** Vite

### **Backend**

- **Runtime & Framework:** Node.js, Express v5
- **Real-time Engine:** Socket.io
- **Language & Execution:** TypeScript, `tsx` (Dev Watcher), `tsc`
- **Utilities:** CORS, Dotenv

---

## 📁 Proje Klasör Yapısı

```text
6-FullStack-ChatApp/
├── client/                 # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/     # Atomik & Modüler UI Bileşenleri
│   │   ├── config/         # Event sabitleri ve ayarlar
│   │   ├── hooks/          # Custom Socket Hook (useSocket)
│   │   ├── services/       # Socket.io Client Instance
│   │   ├── types/          # TypeScript arayüz ve tipleri
│   │   ├── App.tsx         # Ana uygulama akışı
│   │   └── main.tsx        # React giriş noktası
│   └── package.json
│
└── server/                 # Backend (Node.js + Express + Socket.io)
    ├── src/
    │   ├── config/         # CORS & Env yapılandırmaları
    │   ├── constants/      # Socket Event Sabitleri
    │   ├── controllers/    # Socket Event Handler'ları (Join, Message, Disconnect)
    │   ├── types/          # TServer, TSocket ve Event Tipleri
    │   └── server.ts       # Sunucu giriş noktası ve orkestrasyon
    ├── package.json
    └── tsconfig.json
```

import { serveDir } from "https://deno.land/std@0.224.0/http/file_server.ts";

// ابدأ خادم Deno
Deno.serve((req) => {
  // قم بخدمة الملفات من المجلد الحالي (الجذر الرئيسي للمستودع)
  // هذا يعني أن index.html وأي ملفات أخرى في نفس المستوى سيتم تقديمها
  return serveDir(req, {
    fsRoot: ".", // النقطة "." تعني المجلد الحالي (جذر المستودع)
    urlRoot: "", // إذا أردت أن تكون ملفاتك متاحة مباشرة من الجذر (e.g. /index.html)
    enableCors: true, // (اختياري) إذا كنت تحتاج إلى CORS لبعض الأصول
  });
});

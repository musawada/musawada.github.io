/* نادي الأفكار · الإعدادات (يُقرأ وقت التشغيل، فتقدر تعدّله بعد النشر بدون بناء)
 * mode: 'local' ← البيانات في متصفح كل شخص (للتجربة والعرض فقط)
 *       'flow'  ← البيانات على الخادم (Supabase، endpoints تحت). شوف README.md
 */
window.CLUB_CONFIG = {
  mode: 'flow',
  programStart: '2026-11-15',          // أول يوم دوام في البرنامج (YYYY-MM-DD). سؤال كل يوم يمشي من هنا
  seed: false,                          // true = بيانات زملاء تجريبية (للعرض فقط، وضع local)
  allowFast: false,                     // المسرّع ?fast=1 للاختبار فقط
  // دخول الأدمن: sha256(adminSalt + الرقم السري). الرقم نفسه ما ينكتب في أي ملف
  adminSalt: '85786d9fd5f3d144',
  adminHash: 'd90b58dc3c95ad3c29f68874f3c13e0b0625de07ccc1cd3d2bd0dd92fc516e5c',
  // وضع flow: رابط لكل عملية، أو default لرابط واحد يفرّق بالحقل op
  timeoutMs: 10000,
  // مفتاح Supabase العام (publishable): مصمم ينحط في الواجهة، ما يعطي وصول للبيانات. الحماية في الدالة نفسها
  headers: { apikey: 'sb_publishable_mM4FCkv0wli2uyprwIx9EA_37iigGAT' },
  endpoints: {
    default: 'https://pjalfmvefkxlcggigwjq.supabase.co/functions/v1/club',
    today: '', me: '', saveSession: '', publish: '', wall: '', removeMyIdea: '', restoreMyIdea: '', club: '', dash: '',
    adminLogin: '', adminLogout: '', adminOverview: '', adminQuestions: '', adminIdeas: '', adminPeople: '', adminSettings: '', adminAudit: '', adminAct: ''
  }
};

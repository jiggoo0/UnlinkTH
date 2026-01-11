/** @format */
import { Project } from '@/types/project'

export const case4: Project = {
  id: 'PJ-004',
  slug: 'contextual-information-rebalancing',
  title: 'Contextual Rebalancing: การจัดการข้อมูลบิดเบือนบริบท',
  category: 'Communication / Reputation',
  description:
    'ดำเนินการจัดการข้อมูลหรือข่าวสารที่ถูกนำเสนอเพียงบางส่วน (Decontextualized) ซึ่งก่อให้เกิดความเข้าใจผิด เพื่อปรับลำดับความสำคัญให้ข้อมูลที่ถูกต้องและเป็นธรรมปรากฏสู่สาธารณะ',
  duration: '14 - 28 วัน',
  status: 'Completed',
  outcome:
    'เนื้อหาที่บิดเบือนถูกแก้ไขหรือถอดถอน และลำดับการสืบค้น (Search Priority) ถูกปรับสมดุลให้สะท้อนข้อเท็จจริงที่เป็นปัจจุบันที่สุด',
  steps: [
    'Misinterpretation Analysis: วิเคราะห์จุดเชื่อมโยงของข้อมูลที่นำไปสู่การตีความผิดและระบุแหล่งแพร่กระจายหลัก',
    'Fact-Check Coordination: ประสานงานเชิงเทคนิคและข้อมูลกับผู้เผยแพร่เพื่อชี้แจงข้อเท็จจริงและขอแก้ไขเนื้อหา',
    'Platform Enforcement: ยื่นคำร้องต่อผู้ให้บริการแพลตฟอร์มในกรณีที่เนื้อหาเข้าข่าย Misleading Content',
    'Information Re-balancing: วางกลยุทธ์การกระจายข้อมูลชุดที่ถูกต้องเพื่อปรับสมดุลระบบการสืบค้น (SEO Balancing)',
    'Priority Monitoring: ติดตามผลการจัดลำดับของ Search Engine เพื่อให้มั่นใจว่าข้อมูลที่เป็นธรรมถูกแสดงผลก่อน',
  ],
  date: '2026-01-09',
  image: '/images/projects/case-rebalancing.jpg',
}

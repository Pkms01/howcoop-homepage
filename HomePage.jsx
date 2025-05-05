import React from 'react';

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900">
      <header className="bg-blue-600 text-white p-4 shadow">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">HOWCOOP</h1>
          <nav className="space-x-6 text-sm">
            <a href="#" className="hover:underline">홈</a>
            <a href="#" className="hover:underline">네트워크</a>
            <a href="#" className="hover:underline">교육과정</a>
            <a href="#" className="hover:underline">공지사항</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-gray-100 py-16 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">협동조합의 지속가능한 성장 파트너</h2>
            <p className="text-lg text-gray-700 mb-6">
              HOWCOOP은 교육, 컨설팅, 정책 정보를 통해 협동조합의 성장과 연결을 지원합니다.
            </p>
            <a href="#programs" className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
              프로그램 살펴보기
            </a>
          </div>
        </section>

        <section id="programs" className="py-12 px-6 max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">주요 서비스</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: '맞춤형 컨설팅', desc: '조직 문제 진단부터 실행 전략까지 체계적 컨설팅을 제공합니다.' },
              { title: '협동조합 교육', desc: '설립, 운영, 리더십 교육을 온·오프라인으로 제공합니다.' },
              { title: '정책 & 네트워킹', desc: '최신 정책정보와 유관기관 연결을 지원합니다.' },
            ].map((service, index) => (
              <div key={index} className="border p-4 rounded shadow hover:shadow-md transition">
                <h4 className="font-bold mb-2">{service.title}</h4>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-blue-50 py-10 text-center">
          <h4 className="text-xl font-semibold mb-4">지금 바로 지원 프로그램에 참여해보세요</h4>
          <a href="/apply" className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">신청하러 가기</a>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-200 text-sm p-6 text-center">
        © 2025 HOWCOOP | 협동조합을 위한 플랫폼
      </footer>
    </div>
  );
}
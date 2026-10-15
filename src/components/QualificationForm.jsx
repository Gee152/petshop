import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Sparkles, MessageSquare, ArrowRight, User, Phone, Heart, Calendar, Clock, X } from 'lucide-react';
import { PETTOWN_DATA } from '../data/propertyData';

export default function QualificationForm({ onLeadCaptured, isModal = false, onCloseModal }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedWhatsappUrl, setSubmittedWhatsappUrl] = useState('');

  const [formData, setFormData] = useState({
    tutorName: '',
    whatsapp: '',
    petInfo: '',
    serviceInterest: 'Banho & Tosa com Amor (Higiene e Estética)',
    petSize: 'Pequeno Porte (até 10kg)',
    preferredTime: 'Manhã (08h às 12h)'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (!formData.tutorName || !formData.whatsapp || !formData.petInfo) {
      alert("Por favor, preencha seu Nome, WhatsApp e o Nome/Tipo do seu pet para continuar.");
      return;
    }
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const message = `Olá equipe Cuida Filho! Vim pelo site e gostaria de agendar um atendimento para o meu pet no Mateus Hiper Casa Forte. 🐾\n\n` +
      `👤 *Tutor(a):* ${formData.tutorName}\n` +
      `📱 *WhatsApp:* ${formData.whatsapp}\n` +
      `🐶 *Pet:* ${formData.petInfo}\n` +
      `✨ *Serviço de Interesse:* ${formData.serviceInterest}\n` +
      `⚖️ *Porte do Pet:* ${formData.petSize}\n` +
      `⏰ *Período Preferido:* ${formData.preferredTime}`;

    const encodedMsg = encodeURIComponent(message);
    const whatsappUrl = `${PETTOWN_DATA.brand.whatsapp}&text=${encodedMsg}`;
    setSubmittedWhatsappUrl(whatsappUrl);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      if (onLeadCaptured) {
        onLeadCaptured({
          ...formData,
          brand: PETTOWN_DATA.brand.name,
          timestamp: new Date().toISOString()
        });
      }

      window.open(whatsappUrl, '_blank');
    }, 600);
  };

  return (
    <div className={`bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-amber-900/10 relative overflow-hidden text-[#4A2C11] ${isModal ? 'max-w-xl w-full mx-auto' : 'w-full'}`}>

      {/* Background Glow em Laranja e Amarelo */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FF8C00]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#FFB300]/10 rounded-full blur-3xl pointer-events-none"></div>

      {submitted ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
            <CheckCircle2 size={36} />
          </div>
          <h3 className="text-2xl font-extrabold text-[#4A2C11] font-heading">
            Agendamento Pré-Confirmado com Amor!
          </h3>
          <p className="text-[#6B3E2E] text-sm max-w-md mx-auto leading-relaxed">
            Obrigado <span className="font-bold text-[#4A2C11]">{formData.tutorName}</span>! Você está sendo redirecionado para o WhatsApp da equipe <span className="text-[#FF8C00] font-bold">Cuida Filho</span> no Mateus Hiper Casa Forte para finalizar os detalhes do <span className="font-bold">{formData.petInfo}</span>...
          </p>
          <div className="pt-4 flex flex-col gap-3">
            <a
              href={submittedWhatsappUrl || PETTOWN_DATA.brand.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-black py-3.5 px-6 rounded-full transition-all shadow-lg cursor-pointer"
            >
              <MessageSquare size={20} />
              Fale com a gente no WhatsApp ⤵️
            </a>
            {isModal && (
              <button
                type="button"
                onClick={onCloseModal}
                className="text-slate-400 hover:text-slate-600 text-xs py-2 cursor-pointer"
              >
                Fechar janela
              </button>
            )}
          </div>
        </div>
      ) : (
        <div>
          {/* Header */}
          <div className="mb-6 border-b border-amber-100 pb-4 flex items-center justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold bg-[#FF8C00]/10 text-[#FF8C00]">
                <Sparkles size={12} className="text-[#FF8C00]" /> Agendamento e Atendimento Cuida Filho
              </span>
              <h3 className="text-xl font-extrabold text-[#4A2C11] mt-2 font-heading">
                {step === 1 ? 'Dados do Tutor e do Pet' : 'Serviço e Preferência de Horário'}
              </h3>
            </div>
            {isModal && (
              <button
                type="button"
                onClick={onCloseModal}
                className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>
            )}
          </div>

          <form onSubmit={step === 1 ? handleNextStep : handleSubmit} className="space-y-4">
            {step === 1 ? (
              <>
                <div>
                  <label className="block text-xs font-bold text-[#4A2C11] mb-1 flex items-center gap-1.5">
                    <User size={14} className="text-[#FF8C00]" /> Seu Nome Completo (Tutor) *
                  </label>
                  <input
                    type="text"
                    name="tutorName"
                    required
                    placeholder="Ex: Carlos Eduardo Silva"
                    value={formData.tutorName}
                    onChange={handleChange}
                    className="w-full bg-[#FFFDF7] border border-amber-200 focus:border-[#FF8C00] focus:bg-white rounded-xl px-4 py-3 text-[#4A2C11] text-sm outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#4A2C11] mb-1 flex items-center gap-1.5">
                    <Phone size={14} className="text-[#FF8C00]" /> WhatsApp com DDD *
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    required
                    placeholder="Ex: (81) 99184-1337"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full bg-[#FFFDF7] border border-amber-200 focus:border-[#FF8C00] focus:bg-white rounded-xl px-4 py-3 text-[#4A2C11] text-sm outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#4A2C11] mb-1 flex items-center gap-1.5">
                    <Heart size={14} className="text-[#FF8C00]" /> Nome do Pet e Espécie/Raça *
                  </label>
                  <input
                    type="text"
                    name="petInfo"
                    required
                    placeholder="Ex: Bento (Spitz Alemão) ou Amora (Gata)"
                    value={formData.petInfo}
                    onChange={handleChange}
                    className="w-full bg-[#FFFDF7] border border-amber-200 focus:border-[#FF8C00] focus:bg-white rounded-xl px-4 py-3 text-[#4A2C11] text-sm outline-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 bg-[#FF8C00] hover:bg-[#E67E00] text-white font-extrabold py-3.5 px-6 rounded-full transition-all shadow-lg shadow-[#FF8C00]/25 flex items-center justify-center gap-2 text-xs uppercase tracking-wider cursor-pointer active:scale-95"
                >
                  <span>Avançar para Detalhes do Serviço</span>
                  <ArrowRight size={16} />
                </button>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-xs font-bold text-[#4A2C11] mb-1 flex items-center gap-1.5">
                    <Sparkles size={14} className="text-[#FF8C00]" /> Serviço Desejado
                  </label>
                  <select
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    className="w-full bg-[#FFFDF7] border border-amber-200 focus:border-[#FF8C00] focus:bg-white rounded-xl px-4 py-3 text-[#4A2C11] text-sm outline-none transition-all cursor-pointer"
                  >
                    <option value="Banho & Tosa com Amor (Higiene e Estética)">Banho & Tosa com Amor (Higiene e Estética)</option>
                    <option value="Consulta Veterinária & Check-up">Consulta Veterinária & Check-up Preventivo</option>
                    <option value="Produtos de Saúde, Beleza e Alimentação">Produtos de Saúde, Beleza e Alimentação</option>
                    <option value="Cuidado Felino & Estética Delicada">Cuidado Felino & Estética Delicada</option>
                    <option value="Estética Canina & Bem-Estar">Estética Canina & Hidratação</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#4A2C11] mb-1 flex items-center gap-1.5">
                      <Heart size={14} className="text-[#FF8C00]" /> Porte do Pet
                    </label>
                    <select
                      name="petSize"
                      value={formData.petSize}
                      onChange={handleChange}
                      className="w-full bg-[#FFFDF7] border border-amber-200 focus:border-[#FF8C00] focus:bg-white rounded-xl px-3 py-3 text-[#4A2C11] text-sm outline-none transition-all cursor-pointer"
                    >
                      <option value="Pequeno Porte (até 10kg)">Pequeno (até 10kg)</option>
                      <option value="Médio Porte (10 a 25kg)">Médio (10 a 25kg)</option>
                      <option value="Grande Porte (+25kg)">Grande (+25kg)</option>
                      <option value="Felino / Gato">Felino / Gato</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#4A2C11] mb-1 flex items-center gap-1.5">
                      <Clock size={14} className="text-[#FF8C00]" /> Melhor Período
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full bg-[#FFFDF7] border border-amber-200 focus:border-[#FF8C00] focus:bg-white rounded-xl px-3 py-3 text-[#4A2C11] text-sm outline-none transition-all cursor-pointer"
                    >
                      <option value="Manhã (08h às 12h)">Manhã (08h às 12h)</option>
                      <option value="Tarde (13h às 18h)">Tarde (13h às 18h)</option>
                      <option value="Sábado">Sábado</option>
                      <option value="Domingo">Domingo</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-1/3 bg-amber-100 hover:bg-amber-200 text-[#4A2C11] font-bold py-3 rounded-full text-xs transition-all cursor-pointer"
                  >
                    Voltar
                  </button>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-2/3 bg-[#FF8C00] hover:bg-[#E67E00] text-white font-extrabold py-3.5 px-6 rounded-full transition-all shadow-lg shadow-[#FF8C00]/25 flex items-center justify-center gap-2 text-xs uppercase tracking-wider cursor-pointer active:scale-95"
                  >
                    {loading ? (
                      <span className="inline-block animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        <Send size={16} />
                        Enviar e Agendar
                      </>
                    )}
                  </button>
                </div>
              </>
            )}
          </form>

          <div className="mt-5 pt-4 border-t border-amber-100 flex items-center justify-between text-[11px] text-[#6B3E2E]">
            <span className="flex items-center gap-1">
              <ShieldCheck size={14} className="text-[#FF8C00]" /> Atendimento com Amor e Responsabilidade
            </span>
            <span className="font-bold text-[#4A2C11]">Cuida Filho Pet Shop • Mateus Hiper</span>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

interface Props {
  setForm: React.Dispatch<React.SetStateAction<any>>;
}

export default function VoiceBooking({
  setForm,
}: Props) {

  const startVoiceBooking = () => {

    const SpeechRecognition =
      (window as any).webkitSpeechRecognition ||
      (window as any).SpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";

    recognition.start();

    recognition.onresult = (event: any) => {

      const text =
        event.results[0][0].transcript;

      alert("You said: " + text);

      // SIMPLE AUTO FILL DEMO

      setForm((prev: any) => ({
        ...prev,
        problem: text,
      }));
    };
  };

  return (
    <button
      type="button"
      onClick={startVoiceBooking}
      className="voice-btn"
    >
      🎤 Fill Form By Voice
    </button>
  );
}
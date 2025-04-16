import { useNavigate, useParams } from "react-router-dom";

const detailsMap = {
  vision: {
    title: "Our Vision",
    content:
      "Pro Spine envisions a future where spinal health is restored without surgery, using advanced non-invasive techniques. Our goal is to bridge the gap between traditional physiotherapy and surgical interventions, offering cutting-edge treatments that ensure long-term relief and improved mobility. We strive to become a global leader in non-surgical spinal care, setting new benchmarks in patient recovery and well-being. Through continuous innovation, expert care, and patient education, we aim to make spinal treatments more accessible, affordable, and effective. Our commitment is to revolutionize spinal healthcare, empowering individuals to live pain-free, active, and healthier lives.",
  },
  mission: {
    title: "Our Mission",
    content:
      "Pro Spine is committed to redefining spinal care by providing non-surgical, evidence-based treatments that eliminate pain and restore mobility. Our mission is to bridge the gap between conventional physiotherapy and invasive surgeries, offering a holistic, patient-centric approach. We integrate advanced technology, manual therapy, and rehabilitation strategies to deliver effective and long-term relief for spinal disorders. By focusing on continuous research, innovation, and patient education, we aim to make high-quality spinal care accessible and affordable. Our goal is to empower individuals to lead pain-free, active, and healthier lives, setting new standards in spinal healthcare excellence.",
  },
  story: {
    title: "Pro Spine - Story",
    content:
      "Pro Spine was founded with a vision to revolutionize spinal care. Our journey began when a group of passionate healthcare professionals recognized the limitations of traditional physiotherapy and the risks associated with invasive surgeries. We aimed to create a bridge between these two worlds, offering patients a non-surgical solution that is both effective and safe. Through years of research, collaboration, and innovation, we developed advanced techniques and therapies that prioritize patient well-being. Today, Pro Spine stands as a beacon of hope for those suffering from spinal disorders, committed to delivering exceptional care and transforming lives.",
  },
};

const DetailsPage = () => {
  const navigate = useNavigate();
  const { topic } = useParams();
  const detail = detailsMap[topic] || {};

  return (
    <div className="min-h-screen bg-gradient-to-tr from-cyan-400 to-cyan-200 to-cyan-100 text-white p-6 flex flex-col items-center justify-center">
      <div className="max-w-5xl bg-white p-16   rounded-xl shadow-xl relative">
     
        <h2 className="text-4xl font-extrabold  mb-4 text-center text-cyan-500">{detail.title}</h2>
        <p className="text-black text-lg">{detail.content}</p>
        <button
          onClick={() => navigate(-1)}
          className="absolute bottom-4 left-[45%] text-white bg-cyan-600 hover:bg-cyan-700 px-3 py-1 rounded"
        >
          Close ✕
        </button>
      </div>
    
    </div>
  );
};

export default DetailsPage;

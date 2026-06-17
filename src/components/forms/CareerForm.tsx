"use client";

import { useState, FormEvent, useRef } from "react";

interface CareerFormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  coverLetter: string;
}

export default function CareerForm() {
  const [formData, setFormData] = useState<CareerFormData>({
    name: "",
    email: "",
    phone: "",
    position: "",
    coverLetter: "",
  });
  const [resume, setResume] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof CareerFormData | "resume", string>>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof CareerFormData | "resume", string>> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.position) newErrors.position = "Please select a position";
    if (!resume) newErrors.resume = "Resume is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      const body = new FormData();
      Object.entries(formData).forEach(([k, v]) => body.append(k, v));
      if (resume) body.append("resume", resume);
      const res = await fetch("/api/career", { method: "POST", body });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", position: "", coverLetter: "" });
        setResume(null);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (field: keyof CareerFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center" role="alert">
        <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-lg font-semibold text-green-800">Application Submitted!</h3>
        <p className="mt-2 text-sm text-green-700">Thank you for your interest. Our HR team will review your application and reach out soon.</p>
        <button onClick={() => setStatus("idle")} className="mt-4 text-sm font-medium text-green-700 hover:text-green-900 underline">
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Career application form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="career-name" className="block text-sm font-medium text-[var(--color-text-main)] mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input id="career-name" type="text" required value={formData.name} onChange={(e) => handleChange("name", e.target.value)}
            className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent" aria-invalid={!!errors.name} />
          {errors.name && <p className="mt-1 text-sm text-red-500" role="alert">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="career-email" className="block text-sm font-medium text-[var(--color-text-main)] mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input id="career-email" type="email" required value={formData.email} onChange={(e) => handleChange("email", e.target.value)}
            className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent" aria-invalid={!!errors.email} />
          {errors.email && <p className="mt-1 text-sm text-red-500" role="alert">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="career-phone" className="block text-sm font-medium text-[var(--color-text-main)] mb-1">Phone</label>
          <input id="career-phone" type="tel" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)}
            className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="career-position" className="block text-sm font-medium text-[var(--color-text-main)] mb-1">
            Position <span className="text-red-500">*</span>
          </label>
          <select id="career-position" required value={formData.position} onChange={(e) => handleChange("position", e.target.value)}
            className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent" aria-invalid={!!errors.position}>
            <option value="">Select a position</option>
            <option value="campus-architect">Campus Architect</option>
            <option value="project-manager">Project Manager</option>
            <option value="accessibility-specialist">Accessibility Specialist</option>
            <option value="facilities-coordinator">Facilities Coordinator</option>
            <option value="sustainability-analyst">Sustainability Analyst</option>
            <option value="other">Other</option>
          </select>
          {errors.position && <p className="mt-1 text-sm text-red-500" role="alert">{errors.position}</p>}
        </div>
      </div>

      {/* Resume upload */}
      <div>
        <label htmlFor="career-resume" className="block text-sm font-medium text-[var(--color-text-main)] mb-1">
          Resume <span className="text-red-500">*</span>
        </label>
        <div className="border-2 border-dashed border-[var(--color-border)] rounded-lg p-6 text-center hover:border-[var(--color-primary)] transition-colors">
          <input
            ref={fileInputRef}
            id="career-resume"
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0] || null;
              setResume(file);
              if (errors.resume) setErrors((prev) => ({ ...prev, resume: undefined }));
            }}
            aria-describedby={errors.resume ? "resume-error" : "resume-help"}
          />
          {resume ? (
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-[var(--color-success)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm font-medium">{resume.name}</span>
              <button type="button" onClick={() => { setResume(null); if (fileInputRef.current) fileInputRef.current.value = ""; }} className="text-sm text-red-500 hover:text-red-700 ml-2">
                Remove
              </button>
            </div>
          ) : (
            <button type="button" onClick={() => fileInputRef.current?.click()} className="text-sm text-[var(--color-primary)] font-medium hover:text-[var(--color-primary-light)]">
              <svg className="w-8 h-8 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              Click to upload resume
            </button>
          )}
          <p id="resume-help" className="mt-2 text-xs text-gray-500">PDF, DOC, or DOCX up to 10MB</p>
        </div>
        {errors.resume && <p id="resume-error" className="mt-1 text-sm text-red-500" role="alert">{errors.resume}</p>}
      </div>

      {/* Cover Letter */}
      <div>
        <label htmlFor="career-cover" className="block text-sm font-medium text-[var(--color-text-main)] mb-1">Cover Letter (Optional)</label>
        <textarea id="career-cover" rows={4} value={formData.coverLetter} onChange={(e) => handleChange("coverLetter", e.target.value)}
          className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent resize-y"
          placeholder="Tell us why you'd be a great fit..." />
      </div>

      {status === "error" && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700" role="alert">Something went wrong. Please try again.</div>
      )}

      <button type="submit" disabled={status === "submitting"}
        className="w-full sm:w-auto px-8 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-light)] transition-colors disabled:opacity-50">
        {status === "submitting" ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}

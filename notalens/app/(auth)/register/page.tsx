'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const RegisterPage = () => {
  const router = useRouter()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agree, setAgree] = useState(false)

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()

    if (!agree) {
      alert('Harus setuju dengan Terms!')
      return
    }

    if (password !== confirmPassword) {
      alert('Password tidak sama!')
      return
    }

    const user = { name, email, password }
    localStorage.setItem('user', JSON.stringify(user))

    alert('Register berhasil!')
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-[#111] flex justify-center items-center p-5">

      {/* PHONE */}
      <div className="w-[340px] bg-black rounded-[40px] p-2 shadow-2xl">

        {/* SCREEN */}
        <div className="bg-[#f4f4f4] rounded-[32px] h-[680px] flex flex-col overflow-hidden">

          {/* NOTCH */}
          <div className="w-[120px] h-[26px] bg-black mx-auto rounded-b-2xl" />

          <div className="flex-1 px-6 pt-4 overflow-y-auto scrollbar-hide">
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>

            {/* HEADER */}
            <div className="flex items-center gap-2 mb-4">
              <button
                onClick={() => router.push('/')}
                className="p-1 rounded-full hover:bg-gray-200 transition"
              >
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <h2 className="text-xs font-bold tracking-widest text-black">
                REGISTRATION
              </h2>
            </div>

            {/* LOGO */}
            <div className="text-center mb-6">
              <Image
                src="/logo.png"
                alt="logo"
                width={80}
                height={80}
                className="mx-auto mb-2"
              />
              <h1 className="text-[#1B3A8A] text-xl font-bold">
                Create Account
              </h1>
            </div>

            {/* FORM */}
            <form onSubmit={handleRegister} className="space-y-4">

              {/* NAME */}
              <div>
                <label className="text-[11px] text-gray-500 font-semibold">
                  FULL NAME
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full mt-1 bg-white border border-gray-300 rounded-xl px-3 py-2 text-sm text-black outline-none"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-[11px] text-gray-500 font-semibold">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-1 bg-white border border-gray-300 rounded-xl px-3 py-2 text-sm text-black outline-none"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label className="text-[11px] text-gray-500 font-semibold">
                  PASSWORD
                </label>

                <div className="relative mt-1">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-xl px-3 py-2 pr-10 text-sm text-black outline-none"
                  />

                  {/* ICON MATA */}
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-[#1B3A8A]"
                  >
                    {showPassword ? (
                      // 👁️ OPEN
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    ) : (
                      // 🙈 CLOSED
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M17.94 17.94A10.94 10.94 0 0112 20C5 20 1 12 1 12a21.77 21.77 0 015.06-6.94" />
                        <path d="M1 1l22 22" />
                      </svg>
                    )}
                  </span>
                </div>
              </div>

              {/* CONFIRM PASSWORD */}
              <div>
                <label className="text-[11px] text-gray-500 font-semibold">
                  CONFIRM PASSWORD
                </label>

                <div className="relative mt-1">
                  <input
                    type={showConfirm ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-xl px-3 py-2 pr-10 text-sm text-black outline-none"
                  />

                  <span
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-[#1B3A8A]"
                  >
                    {showConfirm ? (
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M17.94 17.94A10.94 10.94 0 0112 20C5 20 1 12 1 12a21.77 21.77 0 015.06-6.94" />
                        <path d="M1 1l22 22" />
                      </svg>
                    )}
                  </span>
                </div>
              </div>

              {/* TERMS */}
              <div className="flex items-start gap-2 text-xs">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="mt-1"
                />
                <p className="text-gray-600">
                  I agree to the{' '}
                  <span className="text-[#1B3A8A] font-semibold">Terms of Service</span>{' '}
                  and{' '}
                  <span className="text-[#1B3A8A] font-semibold">Privacy Policy</span>
                </p>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-[#1B3A8A] text-white py-3 rounded-xl font-bold text-sm mt-2"
              >
                REGISTER
              </button>

            </form>

            {/* FOOTER */}
            <div className="text-center mt-6 text-xs">
              <span className="text-gray-500">
                Already have an account?{' '}
              </span>
              <span
                onClick={() => router.push('/')}
                className="text-[#1B3A8A] font-bold cursor-pointer"
              >
                LOGIN
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
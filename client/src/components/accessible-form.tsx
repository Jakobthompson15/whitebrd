import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiAlertCircle } from 'react-icons/fi';
import { AccessibleButton } from './accessible-button';

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  helpText?: string;
  autoComplete?: string;
  inputMode?: 'text' | 'email' | 'tel' | 'url' | 'numeric';
}

export function FormField({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  value,
  onChange,
  error,
  helpText,
  autoComplete,
  inputMode
}: FormFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const handleBlur = () => {
    setIsFocused(false);
    setIsTouched(true);
  };

  const inputId = `field-${name}`;
  const errorId = `${inputId}-error`;
  const helpId = `${inputId}-help`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <label
        htmlFor={inputId}
        className={`block text-sm font-medium mb-2 transition-colors ${
          error && isTouched ? 'text-red-600' : 'text-gray-700'
        }`}
      >
        {label}
        {required && <span className="text-red-500 ml-1" aria-label="required">*</span>}
      </label>

      <div className="relative">
        <input
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          inputMode={inputMode}
          aria-invalid={error && isTouched ? 'true' : 'false'}
          aria-describedby={`${error && isTouched ? errorId : ''} ${helpText ? helpId : ''}`}
          className={`
            w-full px-4 py-3 border-2 rounded-lg transition-all duration-200
            text-base leading-normal
            focus:outline-none focus:ring-2 focus:ring-offset-2
            ${error && isTouched
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : isFocused
              ? 'border-blue-500 focus:ring-blue-500'
              : 'border-gray-300 hover:border-gray-400'
            }
            ${type === 'textarea' ? 'min-h-[120px] resize-y' : ''}
            placeholder:text-gray-400
            disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
          `}
          style={{
            fontSize: '16px', // Prevents zoom on iOS
            WebkitAppearance: 'none',
            MozAppearance: 'none'
          }}
        />

        {/* Validation Icon */}
        {isTouched && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            {error ? (
              <FiAlertCircle className="w-5 h-5 text-red-500" />
            ) : value ? (
              <FiCheck className="w-5 h-5 text-green-500" />
            ) : null}
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && isTouched && (
        <motion.p
          id={errorId}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-red-600 flex items-center gap-1"
          role="alert"
        >
          <FiAlertCircle className="w-4 h-4 flex-shrink-0" />
          {error}
        </motion.p>
      )}

      {/* Help Text */}
      {helpText && !error && (
        <p id={helpId} className="mt-2 text-sm text-gray-500">
          {helpText}
        </p>
      )}
    </motion.div>
  );
}

interface AccessibleFormProps {
  onSubmit: (data: any) => void;
  children: React.ReactNode;
  className?: string;
}

export function AccessibleForm({ onSubmit, children, className = '' }: AccessibleFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const data = Object.fromEntries(formData);
      await onSubmit(data);
      setSubmitStatus('success');

      // Reset form after successful submission
      setTimeout(() => {
        (e.target as HTMLFormElement).reset();
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-6 ${className}`}
      noValidate // We'll handle validation ourselves
    >
      {children}

      {/* Submit Status Messages */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-green-50 border border-green-200 rounded-lg"
          role="status"
          aria-live="polite"
        >
          <p className="text-green-800 flex items-center gap-2">
            <FiCheck className="w-5 h-5" />
            Form submitted successfully!
          </p>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-50 border border-red-200 rounded-lg"
          role="alert"
          aria-live="assertive"
        >
          <p className="text-red-800 flex items-center gap-2">
            <FiAlertCircle className="w-5 h-5" />
            Something went wrong. Please try again.
          </p>
        </motion.div>
      )}

      <AccessibleButton
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        isLoading={isSubmitting}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </AccessibleButton>
    </form>
  );
}
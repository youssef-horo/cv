import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../page'

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />)
    const heading = screen.getByText('Youssef Horo')
    expect(heading).toBeInTheDocument()
  })

  it('renders the job title in header', () => {
    render(<Home />)
    const jobTitle = screen.getAllByText('DevOps Engineer AI Cloud')
    expect(jobTitle.length).toBeGreaterThan(0)
    // Check that it appears in the header (first occurrence)
    expect(jobTitle[0]).toBeInTheDocument()
  })

  it('renders the company name', () => {
    render(<Home />)
    const company = screen.getByText('BITMARCK')
    expect(company).toBeInTheDocument()
  })

  it('renders email link', () => {
    render(<Home />)
    const emailLink = screen.getByText('yhoro@yhoro.de')
    expect(emailLink).toBeInTheDocument()
    expect(emailLink.closest('a')).toHaveAttribute('href', 'mailto:yhoro@yhoro.de')
  })

  it('renders LinkedIn link', () => {
    render(<Home />)
    const linkedInLink = screen.getByText('LinkedIn')
    expect(linkedInLink).toBeInTheDocument()
    expect(linkedInLink.closest('a')).toHaveAttribute('href', 'https://www.linkedin.com/in/youssef-horo')
  })

  it('renders work experience section', () => {
    render(<Home />)
    const workExperience = screen.getByText('Work Experience')
    expect(workExperience).toBeInTheDocument()
  })

  it('renders certifications section', () => {
    render(<Home />)
    const certifications = screen.getByText('Certifications')
    expect(certifications).toBeInTheDocument()
  })

  it('renders education section', () => {
    render(<Home />)
    const education = screen.getByText('Education')
    expect(education).toBeInTheDocument()
  })
})


# AI Prompt Frontend App

A lightweight React application that allows users to submit prompts to an AI API and view responses in real time.

## Tech Stack
- React + Vite
- JavaScript
- OpenAI API

## Features
- Prompt input with submit button
- AI-powered responses
- Loading and error handling
- Chat history
- Clear chat functionality

## Design Decisions
This project was intentionally kept lightweight to mirror real-world frontend workflows.
I focused on:

- Clear separation of concerns (UI components vs API logic)
- Explicit loading and error states for better UX
- Stateless components where possible
- Persisting chat history via localStorage to improve usability
- Environment-based configuration for secure API key handling

The goal was to demonstrate clean, maintainable frontend architecture rather than over-engineering.

## AI Integration

This project uses the Hugging Face Inference API to generate AI responses.

### Setup
Create a `.env` file in the root directory:
```env
VITE_HF_API_KEY=your_huggingface_api_key


And update **Tech Stack**:
```md
- React + Vite
- JavaScript
- Hugging Face Inference API


## Setup
```bash
npm install
npm run dev


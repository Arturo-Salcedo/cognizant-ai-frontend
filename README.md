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

This project was designed to simulate a real-world frontend feature rather than a demo.

Key considerations:
- Clear separation between UI components and API logic
- Explicit loading and error states for predictable UX
- Provider-agnostic AI integration using Hugging Face
- Local storage persistence to improve usability
- Environment-based configuration for secure API key handling

The goal was to keep the implementation simple, readable, and easy to extend without over-engineering.

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


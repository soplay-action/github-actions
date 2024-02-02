import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('컴포넌트 테스트', () => {
  it('should be render', () => {
    render(<App />);
    const title = screen.getByText('Vite + React');
    expect(title);
  });

  it('카운트 버튼 클릭시 카운트 증가', () => {
    render(<App />);
    const getButton = (str: string | RegExp) =>
      screen.getByRole('button', { name: str });

    const button = getButton(/count is/i);

    expect(getButton(/0/i)).toBeTruthy();

    fireEvent.click(button);

    expect(getButton(/1/i)).toBeTruthy();
  });
});

afterEach(cleanup);

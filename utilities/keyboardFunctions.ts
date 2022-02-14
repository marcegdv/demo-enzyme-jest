export const isEnter = (e: React.KeyboardEvent<HTMLDivElement>) => e.key === 'Enter';
export const isSpaceBar = (e: React.KeyboardEvent<HTMLDivElement>) => e.key === ' ';
export const buttonPress = (e: React.KeyboardEvent<HTMLDivElement>) => isEnter(e) || isSpaceBar(e);
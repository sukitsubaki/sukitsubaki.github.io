/**
 * Suki Tsubaki - Personal Website
 * Navigation functionality and text scrambling/decoding effect
 */

document.addEventListener('DOMContentLoaded', function() {
    // Menu navigation
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('section');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all menu items and sections
            menuItems.forEach(m => m.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked menu item
            this.classList.add('active');
            
            // Show corresponding section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.classList.add('active');
            
            // Apply text transformation effect
            applyTextScramblingEffect(targetSection);
        });
    });
    
    // Apply effect to the initial active section
    const activeSection = document.querySelector('section.active');
    if (activeSection) {
        applyTextScramblingEffect(activeSection);
    }
});

/**
 * Applies a text scrambling/decoding effect to paragraphs in a section
 */
function applyTextScramblingEffect(section) {
    // Remove any existing decode status messages
    const existingStatusElements = section.querySelectorAll('.decode-status');
    existingStatusElements.forEach(el => el.remove());
    
    // Show the decode status next to the title
    const sectionTitle = section.querySelector('h2');
    if (!sectionTitle) return; // Exit if no heading
    
    // Create and add the decoding status message
    const statusElement = document.createElement('span');
    statusElement.className = 'decode-status';
    statusElement.textContent = ' ';
    sectionTitle.appendChild(statusElement);
    
    // Animated dots
    startDotsAnimation(statusElement);
    
    // Get all paragraphs in the section, excluding those in poems
    const paragraphs = Array.from(section.querySelectorAll('p')).filter(p => !p.closest('.poem'));
    
    // Exit if no paragraphs
    if (paragraphs.length === 0) {
        statusElement.remove();
        return;
    }
    
    // Reset any previously applied effects
    paragraphs.forEach(paragraph => {
        // Remove any existing scramble wrappers
        const existingWrappers = paragraph.querySelectorAll('.text-decode-wrapper');
        if (existingWrappers.length > 0) {
            // Store original text
            const originalText = paragraph.textContent;
            // Clear paragraph
            paragraph.innerHTML = '';
            // Restore text directly
            paragraph.textContent = originalText;
        }
    });
    
    // Initially scramble all paragraphs at once
    scrambleAllParagraphs(paragraphs);
    
    // Start decoding paragraphs sequentially
    decodeNextParagraph(paragraphs, 0, statusElement);
}

/**
 * Scramble all paragraphs at once, making them initially visible but with scrambled text
 */
function scrambleAllParagraphs(paragraphs) {
    paragraphs.forEach(paragraph => {
        // Skip empty paragraphs
        if (!paragraph.textContent.trim()) {
            return;
        }
        
        // Store the original text
        const originalText = paragraph.textContent;
        
        // Parse the text into words and spaces
        const textParts = parseTextIntoParts(originalText);
        
        // Create a wrapper for the scrambled text
        const wrapper = document.createElement('div');
        wrapper.className = 'text-decode-wrapper';
        
        // Create and append each scrambled word or space
        textParts.forEach(part => {
            if (part.type === 'space') {
                // Add spaces directly
                const spaceElement = document.createElement('span');
                spaceElement.textContent = part.text;
                wrapper.appendChild(spaceElement);
            } else {
                // Scramble words
                const wordElement = document.createElement('span');
                wordElement.className = 'decode-block';
                wordElement.textContent = scrambleWord(part.text);
                wordElement.dataset.originalWord = part.text; // Store original for later
                wrapper.appendChild(wordElement);
            }
        });
        
        // Replace paragraph content with the scrambled version
        paragraph.innerHTML = '';
        paragraph.appendChild(wrapper);
    });
}

/**
 * Decode paragraphs one by one
 */
function decodeNextParagraph(paragraphs, index, statusElement) {
    if (index >= paragraphs.length) {
        // All paragraphs processed, remove status element
        setTimeout(() => {
            // Clear the animation interval
            if (statusElement.dataset.intervalId) {
                clearInterval(Number(statusElement.dataset.intervalId));
            }
            
            // Fade out and remove the status
            statusElement.classList.add('status-fade-out');
            setTimeout(() => {
                statusElement.remove();
            }, 500);
        }, 300);
        return;
    }
    
    const paragraph = paragraphs[index];
    
    // Skip empty paragraphs
    if (!paragraph.textContent.trim()) {
        decodeNextParagraph(paragraphs, index + 1, statusElement);
        return;
    }
    
    // Get all scrambled words in this paragraph
    const scrambledWords = Array.from(paragraph.querySelectorAll('.decode-block'));
    
    // If no words to decode, move to next paragraph
    if (scrambledWords.length === 0) {
        decodeNextParagraph(paragraphs, index + 1, statusElement);
        return;
    }
    
    // Track progress
    let wordsDecoded = 0;
    
    // Decode two words at a time with different speeds
    function decodeWordPair(startIndex) {
        if (startIndex >= scrambledWords.length) {
            // This paragraph is complete, move to the next one
            setTimeout(() => {
                decodeNextParagraph(paragraphs, index + 1, statusElement);
            }, 200);
            return;
        }
        
        // First word in the pair
        const word1 = scrambledWords[startIndex];
        const originalWord1 = word1.dataset.originalWord;
        
        // Second word in the pair (if exists)
        const word2 = startIndex + 1 < scrambledWords.length ? scrambledWords[startIndex + 1] : null;
        const originalWord2 = word2 ? word2.dataset.originalWord : null;
        
        // Counter for completed words in this pair
        let pairCompleted = 0;
        
        // Function to move to next pair when both words are done
        const onWordComplete = () => {
            pairCompleted++;
            if (pairCompleted === (word2 ? 2 : 1)) {
                // Both words in the pair (or just the one if at the end) are done
                decodeWordPair(startIndex + 2);
            }
        };
        
        // Decode first word (slightly faster)
        if (originalWord1) {
            decodeScrambledWord(word1, originalWord1, 3, 35, onWordComplete); // 3 iterations, 35ms per iteration
        } else {
            onWordComplete();
        }
        
        // Decode second word if exists (slightly slower)
        if (word2 && originalWord2) {
            decodeScrambledWord(word2, originalWord2, 4, 45, onWordComplete); // 4 iterations, 45ms per iteration
        } else if (word2) {
            onWordComplete();
        }
    }
    
    // Start decoding with the first pair
    decodeWordPair(0);
}

/**
 * Decode a scrambled word gradually with customizable speeds
 */
function decodeScrambledWord(element, finalWord, maxIterations, speed, onComplete) {
    // We'll decode one character at a time
    let currentText = element.textContent;
    let iterations = 0;
    
    const interval = setInterval(() => {
        if (iterations >= maxIterations) {
            clearInterval(interval);
            // Final reveal of the correct word
            element.textContent = finalWord;
            element.classList.add('decoded');
            if (onComplete) onComplete();
            return;
        }
        
        // Partially decode: replace some scrambled characters with the correct ones
        let partiallyDecoded = '';
        for (let i = 0; i < currentText.length; i++) {
            // Gradually increase chance of showing correct character
            const correctChance = (iterations + 1) / maxIterations;
            if (Math.random() < correctChance) {
                partiallyDecoded += finalWord[i];
            } else {
                // Scramble this character
                const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
                partiallyDecoded += chars[Math.floor(Math.random() * chars.length)];
            }
        }
        
        element.textContent = partiallyDecoded;
        iterations++;
    }, speed);
}

/**
 * Parse text into words and space sections
 */
function parseTextIntoParts(text) {
    const parts = [];
    let currentWord = '';
    let currentSpace = '';
    let inWord = false;
    
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        
        if (char === ' ' || char === '\n' || char === '\t') {
            // End of a word
            if (inWord) {
                if (currentWord) {
                    parts.push({ type: 'word', text: currentWord });
                    currentWord = '';
                }
                inWord = false;
            }
            currentSpace += char;
        } else {
            // Start/continue a word
            if (!inWord) {
                if (currentSpace) {
                    parts.push({ type: 'space', text: currentSpace });
                    currentSpace = '';
                }
                inWord = true;
            }
            currentWord += char;
        }
    }
    
    // Add final parts
    if (currentWord) {
        parts.push({ type: 'word', text: currentWord });
    } else if (currentSpace) {
        parts.push({ type: 'space', text: currentSpace });
    }
    
    return parts;
}

/**
 * Scramble a word by randomizing its characters
 * Preserves case of each letter
 */
function scrambleWord(word) {
    if (word.length <= 1) return word;
    
    let scrambled = '';
    for (let i = 0; i < word.length; i++) {
        // Generate a random letter with the same case
        const isUpperCase = word[i] === word[i].toUpperCase();
        let chars = isUpperCase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : 'abcdefghijklmnopqrstuvwxyz';
        scrambled += chars[Math.floor(Math.random() * chars.length)];
    }
    return scrambled;
}

/**
 * Animate the dots in the "decoding content..." message
 */
function startDotsAnimation(element) {
    const dots = ['', '.', '..', '...'];
    let dotIndex = 0;
    
    const originalText = element.textContent;
    const interval = setInterval(() => {
        element.textContent = originalText + dots[dotIndex];
        dotIndex = (dotIndex + 1) % dots.length;
    }, 300);
    
    // Store the interval ID on the element to clear it later
    element.dataset.intervalId = interval;
}
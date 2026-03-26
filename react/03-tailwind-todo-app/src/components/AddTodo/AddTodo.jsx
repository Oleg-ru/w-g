import React, {useEffect, useRef, useState} from 'react';
import DeadlineBlock from "../DeadlineBlock/DeadlineBlock.jsx";
import MicrophoneIcon from '../../assets/microphone.png'

function AddTodo({onAdd}) {
    const [text, setText] = useState('');
    const [deadline, setDeadline] = useState("");
    const [showDeadlineInput, setShowDeadlineInput] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [recognition, setRecognition] = useState(null);
    const finalTextRef = useRef('');
    
    function startListening() {
        if (recognition) {
            recognition.start();
            setIsListening(true)
        }
    }

    function stopListening() {
        if (recognition) {
            recognition.stop();
            setIsListening(false);
            setText(finalTextRef.current);
        }
    }

    
    function toggleListener() {
        if (isListening) {
            stopListening()
        } else {
            startListening()
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (SpeechRecognition) {
                const recognitionInstance = new SpeechRecognition();
                recognitionInstance.continuous = true;
                recognitionInstance.lang = 'ru-RU';
                recognitionInstance.interimResults = true;

                recognitionInstance.onresult = (event) => {
                    let finalTranscript = '';
                    let interimScript = '';
                    for (let i = event.resultIndex; i < event.results.length; i++) {
                        const transcript = event.results[i][0].transcript;
                        if (event.results[i].isFinal) {
                            finalTranscript += transcript;
                        } else {
                            interimScript += transcript;
                        }
                        // console.log('Финал', finalTranscript)
                        // console.log('Промежка', interimScript)

                        if (finalTranscript) {
                            finalTextRef.current = finalTextRef.current + " " + finalTranscript;
                            setText(finalTextRef.current);
                        } else if(interimScript) {
                            setText(finalTextRef.current + " " + interimScript);
                        }
                    }
                }
                recognitionInstance.onerror = (event) => {
                    console.error('Ошибка распознования', event.error);
                    stopListening()
                }

                recognitionInstance.onend = () => {
                    if (isListening) {
                        recognitionInstance.start();
                    }
                }
                setRecognition(recognitionInstance);
            }
        }
        return () => {
            if (recognition) {
                recognition.stop();
            }
        }
    }, [isListening]);

    function handleSubmit(event) {
        event.preventDefault();
        if (text.trim()) {
            onAdd(text, deadline);
            setText('');
            setDeadline('');
            setShowDeadlineInput(false);
            finalTextRef.current = '';
        }
    }

    return (
        <form onSubmit={handleSubmit} className="mb-6">
            <div
                className="flex items-center
                bg-white rounded-lg shadow-sm overflow-hidden
                border border-gray-100 focus-within:ring-2 focus-within:ring-blue-500">
                <input
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    placeholder="Добавить задачу..."
                    className="flex-1 p-3 text-gray-700 dark:bg-page-dark dark:text-txt-dark outline-none placeholder-gray-400"
                />
                <button type="button" onClick={toggleListener} title={isListening ? 'Остановить запись' : 'Начать ввод теста задачи голосом'} className={`cursor-pointer p-3 ${isListening ? 'bg-red-500 hover:bg-red-600' : 'bg-fray-200 hover:bg-gray-300'}  transition-colors duration-300 flex items-center justify-center`}>
                    <img src={MicrophoneIcon} alt="Микрофон" className={`w-6 h-6 mr-1 ${isListening ? 'filter brightness-0 invert': ''}`}/>
                </button>
                <button type="submit"
                        className={`p-3 ${isListening ? 'bg-gray-400 cursor-not-allowed' : 'bg-btn-light hover:bg-btn-light-hv cursor-pointer'}  text-white dark:btn-dark hover:dark:btn-dark-hv transition-colors duration-300`}
                        disabled={isListening}
                >➕
                </button>
            </div>
            <DeadlineBlock showDeadlineInput={showDeadlineInput}
                           setDeadline={setDeadline}
                           setShowDeadlineInput={setShowDeadlineInput}
                           deadline={deadline}
            />
            {isListening && (
                <div className="mt-2 text-sm text-blue-500 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse mr-2">
                    </div>
                    <span>Идет запись... Нажмите на микрофон повторно для остановки записи</span>
                </div>
            )}
        </form>
    );
}

export default AddTodo;
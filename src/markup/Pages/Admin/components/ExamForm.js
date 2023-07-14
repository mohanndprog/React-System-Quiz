import React, { useState } from 'react';

const ExamForm = () => {
    const [selectedExam, setSelectedExam] = useState('');
    const [answers, setAnswers] = useState([]);
    const [correctAnswerIndex, setCorrectAnswerIndex] = useState(-1);

    const examOptions = [
        { value: 'choose', label: 'اختيار من متعدد' },
        { value: 'com', label: 'اكمال فراغ' },
        { value: 'rec', label: 'تسجيل صوت' },
        // Add more options as needed
    ];

    const handleExamChange = (event) => {
        const selectedExam = event.target.value;
        setSelectedExam(selectedExam);
        setAnswers([]);
        setCorrectAnswerIndex(-1);
    };

    const handleAnswerChange = (index, event) => {
        const newAnswers = [...answers];
        newAnswers[index] = event.target.value;
        setAnswers(newAnswers);
    };

    const handleCorrectAnswerChange = (index) => {
        setCorrectAnswerIndex(index);
    };

    const addAnswer = () => {
        const newAnswers = [...answers, ''];
        setAnswers(newAnswers);
        setCorrectAnswerIndex(newAnswers.length - 1);
    };

    const isAddAnswerDisabled = selectedExam !== 'choose';

    return (
        <div>
            <div className="form-group  ">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">نوع السؤال</label>
                </div>
                <select class="custom-select" id="inputGroupSelect01 " value={selectedExam} onChange={handleExamChange}>

                    <option value="">نوع الامتحان</option>
                    {examOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                {selectedExam === 'choose' && (
                    <div>
                        <h3>الاجابات:</h3>
                        {answers.map((answer, index) => (
                            <div key={index}>
                                <input
                                    className="form-control"
                                    type="text"
                                    value={answer}
                                    onChange={(event) => handleAnswerChange(index, event)}
                                />
                                <label>
                                    <input
                                        className="form-control"
                                        type="radio"
                                        name="correctAnswer"
                                        checked={correctAnswerIndex === index}
                                        onChange={() => handleCorrectAnswerChange(index)}
                                    />{' '}
                                    اضغط لختيار الاجابة الصحيحة
                                </label>
                            </div>
                        ))}
                        <button type="button" className="btn btn-lg bg-gradient-success btn-lg w-100 mt-4 mb-0" onClick={addAnswer} disabled={isAddAnswerDisabled}>
                            اضافة اجابة
                        </button>
                    </div>
                )}
                {answers.length > 0 && (
                    <div>
                        <h3>الاجابات المضافة:</h3>
                        <ul>
                            {answers.map((answer, index) => (
                                <li key={index}>
                                    {answer} {correctAnswerIndex === index && '(Correct)'}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>





        </div>
    );
};

export default ExamForm;




{/* <div className="form-group  ">
<div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelect01">نوع السؤال</label>
</div>
<select class="custom-select" id="inputGroupSelect01 " value={selectedExam} onChange={handleExamChange}>

    <option value="">نوع الامتحان</option>
    {examOptions.map((option) => (
        <option key={option.value} value={option.value}>
            {option.label}
        </option>
    ))}
</select>

{selectedExam && (
    <div>
        <h3>الاجابة :</h3>
        {answers.map((answer, index) => (
            <input
                className="form-control"
                key={index}
                value={answer}
                onChange={(event) => handleAnswerChange(index, event)}
            />
        ))}
        <button class="btn bg-gradient-success w-100 mb-0 toast-btn mr-2" type="button" onClick={addAnswer} disabled={isAddAnswerDisabled}>اضافة</button>
    </div>
)}
{answers.length > 0 && (
    <div>
        <h3>الإجابات المقدمة:</h3>
        <ul>
            {answers.map((answer, index) => (
                <li key={index}>{answer}</li>
            ))}
        </ul>
    </div>
)}

</div> */}
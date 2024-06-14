
import tw from 'twin.macro';

const Wrapper = tw.main`mx-auto w-full max-w-screen-lg px-8 py-12`;
const Title = tw.h2`text-2xl text-slate-700`;

const List = tw.h3`text-xl font-bold text-slate-700 mt-6`;

const SectionTitle = tw.div`text-lg font-bold text-slate-700 mt-6`;

const Content = tw.p`text-base text-slate-600 ml-4`;


export default function Syllabus(){
    
    return(
        <Wrapper>
            <Title>Introduction to Programming Powered with AI-Chatbot Course Syllabus</Title>
            <List>Week 1: Introduction to programming language </List>
            <SectionTitle>•	Lecture Topics:</SectionTitle>
                <Content>o	Overview of Python and Java programming languages</Content>
                <Content>o	Basic syntax, variables, and data types</Content>
                <Content>o	Input and output operations</Content>
                <Content>o	Control structures: if statements and loops (for and while)</Content>

            <SectionTitle>•	Lab Activities:</SectionTitle>
                <Content>o	Writing and running simple arithmetic programs</Content>
                <Content>o	Practice problems on variables, data types, and control structures</Content>
            <SectionTitle>•	Assignments:</SectionTitle>
                <Content>o	Write a script to check if a number is prime</Content>




        </Wrapper>

    )


}
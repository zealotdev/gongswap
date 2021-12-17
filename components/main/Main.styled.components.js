import tw, { styled } from 'twin.macro';

const mainVariant = {
  large: tw`hidden md:flex w-4/6 mx-auto pt-40 justify-between`,
  mobile: tw`w-full md:hidden px-10`,
};

export const MainComponent = styled.div(() => [
  ({ variant = 'mobile' }) => mainVariant[variant],
]);

const heroVariant = {
  large: tw`hidden md:block w-full `,
  mobile: tw`md:hidden w-full `,
};

export const Hero = styled.div(() => [
  `height: 40vh`,
  ({ variant = 'mobile' }) => heroVariant[variant],
]);

const buttonVariant = {
  large: tw`px-4 py-3 text-xl`,
  mobile: tw`px-3 py-2 text-lg`,
};

export const Button = styled.button(() => [
  tw`hover:shadow-xl text-white cursor-pointer rounded-lg border-0`,
  `
  background-color: #365a67;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #2f4e5a;
  }
  & .red{
    color:red;
  }
  `,
  ({ variant = 'mobile' }) => buttonVariant[variant],
]);

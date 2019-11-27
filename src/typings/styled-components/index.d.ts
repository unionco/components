import { StyledComponentProps } from 'styled-components';
import { ColorProps, SpaceProps, DisplayProps, FontSizeProps, LayoutProps, TypographyProps, BorderProps, ShadowProps } from 'styled-system';

export type StyledSystemProps<
  C extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
  P extends object
  > = StyledComponentProps<C, any, P, never> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  };

export type CommonStyledSystemProps = LayoutProps & ColorProps & SpaceProps & DisplayProps;

export type TypeStyledSystemProps = TypographyProps;

export type BorderStyledSystemProps = BorderProps & ShadowProps;

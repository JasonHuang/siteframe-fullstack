/**
 * Component Styles for Company Theme
 * 组件样式定义了主题中各种UI组件的视觉设计和交互效果
 */

import designTokens from './tokens';

const componentStyles = {
  // 按钮组件
  button: {
    // 基础样式
    base: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: designTokens.borders.radius.md,
      fontWeight: designTokens.typography.fontWeight.medium,
      fontSize: designTokens.typography.fontSize.sm,
      lineHeight: designTokens.typography.lineHeight.none,
      transition: 'all 150ms ease-in-out',
      cursor: 'pointer',
      border: 'none',
      outline: 'none',
      userSelect: 'none',
      textDecoration: 'none',
      '&:focus-visible': {
        outline: `2px solid ${designTokens.colors.primary[500]}`,
        outlineOffset: '2px'
      },
      '&:disabled': {
        opacity: designTokens.opacity[50],
        cursor: 'not-allowed'
      }
    },
    
    // 尺寸变体
    sizes: {
      xs: {
        height: '24px',
        paddingX: designTokens.spacing[2],
        fontSize: designTokens.typography.fontSize.xs
      },
      sm: {
        height: '32px',
        paddingX: designTokens.spacing[3],
        fontSize: designTokens.typography.fontSize.sm
      },
      md: {
        height: '40px',
        paddingX: designTokens.spacing[4],
        fontSize: designTokens.typography.fontSize.sm
      },
      lg: {
        height: '48px',
        paddingX: designTokens.spacing[6],
        fontSize: designTokens.typography.fontSize.base
      },
      xl: {
        height: '56px',
        paddingX: designTokens.spacing[8],
        fontSize: designTokens.typography.fontSize.lg
      }
    },
    
    // 颜色变体
    variants: {
      primary: {
        backgroundColor: designTokens.colors.primary[500],
        color: designTokens.colors.white,
        boxShadow: designTokens.shadows.primary,
        '&:hover': {
          backgroundColor: designTokens.colors.primary[600],
          transform: 'translateY(-1px)',
          boxShadow: designTokens.shadows.lg
        },
        '&:active': {
          backgroundColor: designTokens.colors.primary[700],
          transform: 'translateY(0)'
        }
      },
      secondary: {
        backgroundColor: designTokens.colors.secondary[500],
        color: designTokens.colors.white,
        boxShadow: designTokens.shadows.secondary,
        '&:hover': {
          backgroundColor: designTokens.colors.secondary[600],
          transform: 'translateY(-1px)',
          boxShadow: designTokens.shadows.lg
        }
      },
      outline: {
        backgroundColor: 'transparent',
        color: designTokens.colors.primary[600],
        border: `1px solid ${designTokens.colors.primary[300]}`,
        '&:hover': {
          backgroundColor: designTokens.colors.primary[50],
          borderColor: designTokens.colors.primary[400]
        }
      },
      ghost: {
        backgroundColor: 'transparent',
        color: designTokens.colors.primary[600],
        '&:hover': {
          backgroundColor: designTokens.colors.primary[50]
        }
      },
      destructive: {
        backgroundColor: designTokens.colors.error[500],
        color: designTokens.colors.white,
        boxShadow: designTokens.shadows.error,
        '&:hover': {
          backgroundColor: designTokens.colors.error[600]
        }
      }
    }
  },
  
  // 卡片组件
  card: {
    base: {
      backgroundColor: designTokens.colors.white,
      borderRadius: designTokens.borders.radius.lg,
      border: `1px solid ${designTokens.colors.neutral[200]}`,
      boxShadow: designTokens.shadows.sm,
      overflow: 'hidden',
      transition: 'all 200ms ease-in-out',
      '&:hover': {
        boxShadow: designTokens.shadows.md,
        transform: 'translateY(-2px)'
      }
    },
    
    variants: {
      elevated: {
        boxShadow: designTokens.shadows.lg,
        border: 'none',
        '&:hover': {
          boxShadow: designTokens.shadows.xl,
          transform: 'translateY(-4px)'
        }
      },
      outlined: {
        boxShadow: 'none',
        border: `2px solid ${designTokens.colors.neutral[200]}`,
        '&:hover': {
          borderColor: designTokens.colors.primary[300],
          boxShadow: designTokens.shadows.sm
        }
      },
      filled: {
        backgroundColor: designTokens.colors.neutral[50],
        border: 'none',
        boxShadow: 'none'
      }
    },
    
    header: {
      padding: designTokens.spacing[6],
      borderBottom: `1px solid ${designTokens.colors.neutral[200]}`
    },
    
    content: {
      padding: designTokens.spacing[6]
    },
    
    footer: {
      padding: designTokens.spacing[6],
      borderTop: `1px solid ${designTokens.colors.neutral[200]}`,
      backgroundColor: designTokens.colors.neutral[50]
    }
  },
  
  // 输入框组件
  input: {
    base: {
      width: '100%',
      height: '40px',
      padding: `${designTokens.spacing[2]} ${designTokens.spacing[3]}`,
      fontSize: designTokens.typography.fontSize.sm,
      lineHeight: designTokens.typography.lineHeight.normal,
      color: designTokens.colors.neutral[900],
      backgroundColor: designTokens.colors.white,
      border: `1px solid ${designTokens.colors.neutral[300]}`,
      borderRadius: designTokens.borders.radius.md,
      outline: 'none',
      transition: 'all 150ms ease-in-out',
      '&::placeholder': {
        color: designTokens.colors.neutral[400]
      },
      '&:focus': {
        borderColor: designTokens.colors.primary[500],
        boxShadow: `0 0 0 3px ${designTokens.colors.primary[100]}`
      },
      '&:disabled': {
        backgroundColor: designTokens.colors.neutral[50],
        color: designTokens.colors.neutral[500],
        cursor: 'not-allowed'
      }
    },
    
    sizes: {
      sm: {
        height: '32px',
        padding: `${designTokens.spacing[1]} ${designTokens.spacing[2]}`,
        fontSize: designTokens.typography.fontSize.xs
      },
      md: {
        height: '40px',
        padding: `${designTokens.spacing[2]} ${designTokens.spacing[3]}`,
        fontSize: designTokens.typography.fontSize.sm
      },
      lg: {
        height: '48px',
        padding: `${designTokens.spacing[3]} ${designTokens.spacing[4]}`,
        fontSize: designTokens.typography.fontSize.base
      }
    },
    
    variants: {
      error: {
        borderColor: designTokens.colors.error[500],
        '&:focus': {
          borderColor: designTokens.colors.error[500],
          boxShadow: `0 0 0 3px ${designTokens.colors.error[100]}`
        }
      },
      success: {
        borderColor: designTokens.colors.success[500],
        '&:focus': {
          borderColor: designTokens.colors.success[500],
          boxShadow: `0 0 0 3px ${designTokens.colors.success[100]}`
        }
      }
    }
  },
  
  // 标签组件
  badge: {
    base: {
      display: 'inline-flex',
      alignItems: 'center',
      paddingX: designTokens.spacing[2],
      paddingY: designTokens.spacing[1],
      fontSize: designTokens.typography.fontSize.xs,
      fontWeight: designTokens.typography.fontWeight.medium,
      borderRadius: designTokens.borders.radius.full,
      textTransform: 'uppercase',
      letterSpacing: designTokens.typography.letterSpacing.wide
    },
    
    variants: {
      primary: {
        backgroundColor: designTokens.colors.primary[100],
        color: designTokens.colors.primary[800]
      },
      secondary: {
        backgroundColor: designTokens.colors.secondary[100],
        color: designTokens.colors.secondary[800]
      },
      success: {
        backgroundColor: designTokens.colors.success[100],
        color: designTokens.colors.success[800]
      },
      warning: {
        backgroundColor: designTokens.colors.warning[100],
        color: designTokens.colors.warning[800]
      },
      error: {
        backgroundColor: designTokens.colors.error[100],
        color: designTokens.colors.error[800]
      },
      neutral: {
        backgroundColor: designTokens.colors.neutral[100],
        color: designTokens.colors.neutral[800]
      }
    }
  },
  
  // 模态框组件
  modal: {
    overlay: {
      position: 'fixed',
      inset: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: `blur(${designTokens.blur.sm})`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: designTokens.zIndex[50]
    },
    
    content: {
      backgroundColor: designTokens.colors.white,
      borderRadius: designTokens.borders.radius.xl,
      boxShadow: designTokens.shadows['2xl'],
      maxWidth: '500px',
      width: '90vw',
      maxHeight: '90vh',
      overflow: 'auto',
      position: 'relative'
    },
    
    header: {
      padding: designTokens.spacing[6],
      borderBottom: `1px solid ${designTokens.colors.neutral[200]}`
    },
    
    body: {
      padding: designTokens.spacing[6]
    },
    
    footer: {
      padding: designTokens.spacing[6],
      borderTop: `1px solid ${designTokens.colors.neutral[200]}`,
      display: 'flex',
      justifyContent: 'flex-end',
      gap: designTokens.spacing[3]
    }
  }
};

export default componentStyles;
const GalleryMeta = {
  name: 'Gallery',
  displayName: 'Image Gallery',
  description: 'Image gallery component for showcasing photos and visual content',
  category: 'content',
  icon: '🖼️',
  
  props: {
    title: {
      type: 'string',
      label: 'Gallery Title',
      default: 'Our Work Gallery',
      description: 'Main title of the gallery section'
    },
    subtitle: {
      type: 'string',
      label: 'Gallery Subtitle',
      default: 'Showcasing our professional environment and achievements',
      description: 'Subtitle of the gallery section'
    },
    columns: {
      type: 'select',
      label: 'Number of Columns',
      options: [
        { value: 2, label: '2 Columns' },
        { value: 3, label: '3 Columns' },
        { value: 4, label: '4 Columns' }
      ],
      default: 3,
      description: 'Number of columns in the gallery grid'
    },
    showModal: {
      type: 'boolean',
      label: 'Enable Modal View',
      default: true,
      description: 'Whether to show images in modal when clicked'
    },
    items: {
      type: 'array',
      label: 'Gallery Items',
      description: 'List of images to display in the gallery',
      itemType: {
        type: 'object',
        properties: {
          src: {
            type: 'image',
            label: 'Image Source',
            required: true
          },
          alt: {
            type: 'string',
            label: 'Alt Text',
            required: true
          },
          title: {
            type: 'string',
            label: 'Image Title'
          },
          description: {
            type: 'textarea',
            label: 'Image Description'
          }
        }
      },
      default: [
        {
          src: '/themes/company-theme/images/business/business-01.jpg',
          alt: 'Business Meeting',
          title: 'Professional Meetings',
          description: 'Strategic business discussions and planning sessions'
        },
        {
          src: '/themes/company-theme/images/business/business-04.jpg',
          alt: 'Team Collaboration',
          title: 'Team Collaboration',
          description: 'Collaborative work environment and teamwork'
        }
      ]
    }
  },
  
  variants: [
    {
      name: 'default',
      label: 'Default Gallery',
      props: {}
    },
    {
      name: 'compact',
      label: 'Compact Gallery',
      props: {
        columns: 4,
        showModal: false
      }
    },
    {
      name: 'showcase',
      label: 'Showcase Gallery',
      props: {
        columns: 2,
        showModal: true
      }
    }
  ],
  
  examples: [
    {
      name: 'business-gallery',
      label: 'Business Gallery',
      props: {
        title: 'Our Business Environment',
        subtitle: 'Take a look at our professional workspace and team activities',
        columns: 3
      }
    },
    {
      name: 'portfolio',
      label: 'Portfolio Gallery',
      props: {
        title: 'Our Portfolio',
        subtitle: 'Showcasing our best work and achievements',
        columns: 2
      }
    }
  ]
};

export default GalleryMeta;
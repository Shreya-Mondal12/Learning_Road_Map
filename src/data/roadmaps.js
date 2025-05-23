
export const categories = ["Frontend", "Backend", "Mobile", "DevOps", "Data Science", "Design"];

export const difficulties = ["beginner", "intermediate", "advanced"];

export const roadmaps = [
  {
    id: 1,
    title: "React Developer",
    description: "Master modern React, hooks, state management, and build real-world applications",
    category: "Frontend",
    difficulty: "intermediate",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2670&auto=format&fit=crop",
    progress: 65,
    milestones: [
      {
        id: 1,
        title: "React Fundamentals",
        description: "Learn core React concepts including JSX, components, and props",
        completed: true,
        resources: [
          {
            title: "React Official Documentation",
            url: "https://reactjs.org/docs/getting-started.html",
            type: "article"
          },
          {
            title: "React Crash Course",
            url: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
            type: "video"
          }
        ]
      },
      {
        id: 2,
        title: "React Hooks",
        description: "Master useState, useEffect, useContext, and custom hooks",
        completed: true,
        resources: [
          {
            title: "Hooks API Reference",
            url: "https://reactjs.org/docs/hooks-reference.html",
            type: "article"
          },
          {
            title: "React Hooks Course",
            url: "https://www.udemy.com/course/react-hooks/",
            type: "course"
          }
        ]
      },
      {
        id: 3,
        title: "State Management",
        description: "Learn Redux, Context API, and other state management approaches",
        completed: false,
        resources: [
          {
            title: "Redux Documentation",
            url: "https://redux.js.org/introduction/getting-started",
            type: "article"
          },
          {
            title: "State Management in React",
            url: "https://www.pluralsight.com/courses/react-state-management",
            type: "course"
          }
        ]
      },
      {
        id: 4,
        title: "Advanced React Patterns",
        description: "Master compound components, render props, and other advanced patterns",
        completed: false,
        resources: [
          {
            title: "Advanced React Patterns",
            url: "https://kentcdodds.com/blog/advanced-react-patterns",
            type: "article"
          },
          {
            title: "Advanced React",
            url: "https://frontendmasters.com/courses/advanced-react-patterns/",
            type: "course"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Node.js Backend",
    description: "Build scalable backend systems with Node.js, Express, and MongoDB",
    category: "Backend",
    difficulty: "intermediate",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2274&auto=format&fit=crop",
    progress: 30,
    milestones: [
      {
        id: 1,
        title: "Node.js Basics",
        description: "Learn the fundamentals of Node.js and its core modules",
        completed: true,
        resources: [
          {
            title: "Node.js Documentation",
            url: "https://nodejs.org/en/docs/",
            type: "article"
          },
          {
            title: "Node.js Crash Course",
            url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
            type: "video"
          }
        ]
      },
      {
        id: 2,
        title: "Express Framework",
        description: "Build REST APIs with Express.js",
        completed: false,
        resources: [
          {
            title: "Express.js Guide",
            url: "https://expressjs.com/en/guide/routing.html",
            type: "article"
          },
          {
            title: "Building RESTful APIs with Express",
            url: "https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express",
            type: "course"
          }
        ]
      },
      {
        id: 3,
        title: "MongoDB Integration",
        description: "Learn to connect Node.js with MongoDB using Mongoose",
        completed: false,
        resources: [
          {
            title: "MongoDB University",
            url: "https://university.mongodb.com/",
            type: "course"
          },
          {
            title: "Mongoose Documentation",
            url: "https://mongoosejs.com/docs/",
            type: "article"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Flutter Development",
    description: "Build beautiful cross-platform mobile apps with Flutter and Dart",
    category: "Mobile",
    difficulty: "advanced",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
    progress: 10,
    milestones: [
      {
        id: 1,
        title: "Dart Programming",
        description: "Learn the Dart programming language used in Flutter development",
        completed: true,
        resources: [
          {
            title: "Dart Language Tour",
            url: "https://dart.dev/guides/language/language-tour",
            type: "article"
          },
          {
            title: "Dart Programming Tutorial",
            url: "https://www.youtube.com/watch?v=Ej_Pcr4uC2Q",
            type: "video"
          }
        ]
      },
      {
        id: 2,
        title: "Flutter Widgets",
        description: "Master Flutter's widget-based UI system",
        completed: false,
        resources: [
          {
            title: "Flutter Widget Catalog",
            url: "https://flutter.dev/docs/development/ui/widgets",
            type: "article"
          },
          {
            title: "Flutter Crash Course",
            url: "https://www.udemy.com/course/flutter-bootcamp-with-dart/",
            type: "course"
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "AWS Cloud Practitioner",
    description: "Learn the basics of Amazon Web Services for cloud computing",
    category: "DevOps",
    difficulty: "beginner",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2232&auto=format&fit=crop",
    progress: 80,
    milestones: [
      {
        id: 1,
        title: "AWS Core Services",
        description: "Understand EC2, S3, RDS, and other core AWS services",
        completed: true,
        resources: [
          {
            title: "AWS Documentation",
            url: "https://docs.aws.amazon.com/",
            type: "article"
          },
          {
            title: "AWS Cloud Practitioner Essentials",
            url: "https://aws.amazon.com/training/learn-about/cloud-practitioner/",
            type: "course"
          }
        ]
      },
      {
        id: 2,
        title: "Cloud Architecture",
        description: "Learn basic cloud architecture patterns and best practices",
        completed: true,
        resources: [
          {
            title: "AWS Architecture Center",
            url: "https://aws.amazon.com/architecture/",
            type: "article"
          },
          {
            title: "AWS Certified Cloud Practitioner",
            url: "https://www.udemy.com/course/aws-certified-cloud-practitioner-new/",
            type: "course"
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Python Data Science",
    description: "Master Python for data analysis, visualization, and machine learning",
    category: "Data Science",
    difficulty: "intermediate",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    progress: 45,
    milestones: [
      {
        id: 1,
        title: "Python Fundamentals",
        description: "Learn Python basics with a focus on data science applications",
        completed: true,
        resources: [
          {
            title: "Python Documentation",
            url: "https://docs.python.org/3/",
            type: "article"
          },
          {
            title: "Python for Data Science",
            url: "https://www.datacamp.com/courses/intro-to-python-for-data-science",
            type: "course"
          }
        ]
      },
      {
        id: 2,
        title: "Data Analysis with Pandas",
        description: "Master data manipulation and analysis with Pandas",
        completed: true,
        resources: [
          {
            title: "Pandas Documentation",
            url: "https://pandas.pydata.org/docs/",
            type: "article"
          },
          {
            title: "Data Analysis with Python and Pandas",
            url: "https://www.youtube.com/watch?v=vmEHCJofslg",
            type: "video"
          }
        ]
      },
      {
        id: 3,
        title: "Data Visualization",
        description: "Create impactful visualizations with Matplotlib and Seaborn",
        completed: false,
        resources: [
          {
            title: "Matplotlib Tutorials",
            url: "https://matplotlib.org/stable/tutorials/index.html",
            type: "article"
          },
          {
            title: "Data Visualization with Python",
            url: "https://www.coursera.org/learn/python-for-data-visualization",
            type: "course"
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "UI/UX Design",
    description: "Learn user interface and experience design principles and tools",
    category: "Design",
    difficulty: "beginner",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2264&auto=format&fit=crop",
    progress: 20,
    milestones: [
      {
        id: 1,
        title: "Design Fundamentals",
        description: "Learn color theory, typography, and layout basics",
        completed: true,
        resources: [
          {
            title: "Design for Hackers",
            url: "https://www.amazon.com/Design-Hackers-Reverse-Engineering-Beauty/dp/1119998956",
            type: "book"
          },
          {
            title: "UI Design Fundamentals",
            url: "https://www.youtube.com/watch?v=tRpoI6vkqLs",
            type: "video"
          }
        ]
      },
      {
        id: 2,
        title: "Figma Essentials",
        description: "Master the Figma design tool for UI/UX work",
        completed: false,
        resources: [
          {
            title: "Figma Tutorial",
            url: "https://www.figma.com/resources/learn-design/",
            type: "article"
          },
          {
            title: "Figma Crash Course",
            url: "https://www.youtube.com/watch?v=4W4LvJnNegA",
            type: "video"
          }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "DevOps Engineer",
    description: "Master CI/CD, container orchestration, and infrastructure as code",
    category: "DevOps",
    difficulty: "advanced",
    image: "https://cdn.vectorstock.com/i/2000v/32/99/devops-development-and-operations-technology-flat-vector-27183299.avif",
    progress: 35,
    milestones: [
      {
        id: 1,
        title: "Docker Containers",
        description: "Learn to containerize applications with Docker",
        completed: true,
        resources: [
          {
            title: "Docker Documentation",
            url: "https://docs.docker.com/",
            type: "article"
          },
          {
            title: "Docker Mastery",
            url: "https://www.udemy.com/course/docker-mastery/",
            type: "course"
          }
        ]
      },
      {
        id: 2,
        title: "Kubernetes",
        description: "Master container orchestration with Kubernetes",
        completed: false,
        resources: [
          {
            title: "Kubernetes Documentation",
            url: "https://kubernetes.io/docs/home/",
            type: "article"
          },
          {
            title: "Kubernetes for the Absolute Beginners",
            url: "https://www.udemy.com/course/learn-kubernetes/",
            type: "course"
          }
        ]
      }
    ]
  },
  {
    id: 8,
    title: "iOS Development",
    description: "Build native iOS apps with Swift and SwiftUI",
    category: "Mobile",
    difficulty: "intermediate",
    image: "https://images.unsplash.com/photo-1470350576089-539d5a852bf7?q=80&w=2670&auto=format&fit=crop",
    progress: 50,
    milestones: [
      {
        id: 1,
        title: "Swift Programming",
        description: "Learn the Swift programming language for iOS development",
        completed: true,
        resources: [
          {
            title: "Swift Documentation",
            url: "https://swift.org/documentation/",
            type: "article"
          },
          {
            title: "Swift Programming Tutorial",
            url: "https://www.youtube.com/watch?v=comQ1-x2a1Q",
            type: "video"
          }
        ]
      },
      {
        id: 2,
        title: "UIKit Fundamentals",
        description: "Master the UIKit framework for building iOS interfaces",
        completed: true,
        resources: [
          {
            title: "UIKit Documentation",
            url: "https://developer.apple.com/documentation/uikit",
            type: "article"
          },
          {
            title: "iOS & Swift - The Complete iOS App Development Bootcamp",
            url: "https://www.udemy.com/course/ios-13-app-development-bootcamp/",
            type: "course"
          }
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Machine Learning",
    description: "Build and deploy machine learning models with Python",
    category: "Data Science",
    difficulty: "advanced",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2432&auto=format&fit=crop",
    progress: 15,
    milestones: [
      {
        id: 1,
        title: "ML Fundamentals",
        description: "Learn the foundations of machine learning algorithms",
        completed: true,
        resources: [
          {
            title: "Machine Learning Crash Course",
            url: "https://developers.google.com/machine-learning/crash-course",
            type: "course"
          },
          {
            title: "Machine Learning for Beginners",
            url: "https://www.youtube.com/watch?v=jGwO_UgTS7I",
            type: "video"
          }
        ]
      },
      {
        id: 2,
        title: "Scikit-Learn",
        description: "Build ML models with the Scikit-Learn library",
        completed: false,
        resources: [
          {
            title: "Scikit-Learn Documentation",
            url: "https://scikit-learn.org/stable/documentation.html",
            type: "article"
          },
          {
            title: "Machine Learning with Python and Scikit-Learn",
            url: "https://www.datacamp.com/courses/supervised-learning-with-scikit-learn",
            type: "course"
          }
        ]
      }
    ]
  }
];
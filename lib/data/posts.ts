export type PostMeta = {
    id: string;
    title: string;
    slug: string;
    excerpt?: string;
    date: string;
    tags?: string[];
    cover?: string;
    content: string; // Full article content
};

const posts: PostMeta[] = [
    {
        id: 'p1',
        title: 'Designing Low-Latency Web Apps',
        slug: 'designing-low-latency-web-apps',
        excerpt: 'Principles and patterns for building responsive, low-latency experiences using server-side techniques and caching.',
        date: '2025-07-12',
        tags: ['performance', 'architecture'],
        cover: '/blog/low-latency.png',
        content: `
# Designing Low-Latency Web Apps

Building responsive, low-latency web applications is crucial for user experience. Here are key principles and patterns.

## Understanding Latency

Latency is the delay between a user action and the application's response. Even a few hundred milliseconds can significantly impact user perception.

## Server-Side Rendering (SSR)

Next.js enables SSR out of the box, which helps reduce the time to first meaningful paint. By rendering pages on the server, users see content faster.

## Caching Strategies

### Edge Caching
Deploy your application to edge locations close to your users. Use CDNs like Vercel Edge Network or Cloudflare.

### Redis Caching
For dynamic data, implement Redis caching:

\`\`\`typescript
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);

async function getCachedData(key: string) {
  const cached = await redis.get(key);
  if (cached) return JSON.parse(cached);
  
  const fresh = await fetchFromDatabase();
  await redis.set(key, JSON.stringify(fresh), 'EX', 3600);
  return fresh;
}
\`\`\`

## Database Optimization

- Use connection pooling
- Index frequently queried fields
- Implement database query caching
- Consider read replicas for heavy traffic

## Frontend Optimizations

1. **Code Splitting**: Load only what's needed
2. **Image Optimization**: Use Next.js Image component
3. **Prefetching**: Anticipate user navigation
4. **Lazy Loading**: Defer non-critical resources

## Monitoring

Track your Core Web Vitals:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

## Conclusion

Low-latency applications require a holistic approach combining server optimization, smart caching, and frontend best practices.
        `
    },
    {
        id: 'p2',
        title: 'From Monolith to Microservices: A Practical Guide',
        slug: 'monolith-to-microservices',
        excerpt: 'Step-by-step approach to split a legacy app and keep engineering velocity during migration.',
        date: '2024-11-03',
        tags: ['architecture', 'backend'],
        cover: '/blog/microservices.png',
        content: `
# From Monolith to Microservices: A Practical Guide

Migrating from a monolithic architecture to microservices is challenging but can vastly improve scalability and team autonomy.

## Why Migrate?

### Benefits
- Independent scaling of services
- Technology flexibility per service
- Faster deployment cycles
- Better fault isolation

### Challenges
- Increased operational complexity
- Network latency between services
- Data consistency challenges
- Requires DevOps maturity

## Step-by-Step Migration Strategy

### 1. Identify Bounded Contexts

Start by mapping your domain into distinct bounded contexts. Use Domain-Driven Design (DDD) principles.

### 2. Strangler Fig Pattern

Don't rewrite everything at once. Gradually extract services:

\`\`\`
User Request → API Gateway
              ↓
    New Service (if available)
              ↓ (fallback)
    Legacy Monolith
\`\`\`

### 3. Database Per Service

Each microservice should own its data. Start with:
- Separate schemas in the same database
- Eventually move to separate databases

### 4. API Gateway

Implement an API gateway to:
- Route requests to appropriate services
- Handle authentication/authorization
- Rate limiting and monitoring

Example with Express:

\`\`\`typescript
const gateway = express();

gateway.use('/users', proxy('http://user-service:3001'));
gateway.use('/orders', proxy('http://order-service:3002'));
gateway.use('*', proxy('http://legacy-monolith:3000'));
\`\`\`

## Communication Patterns

### Synchronous (REST/gRPC)
Best for: Real-time requests requiring immediate response

### Asynchronous (Message Queue)
Best for: Event-driven workflows, decoupling services

\`\`\`typescript
// Publishing event
await messageQueue.publish('order.created', {
  orderId: '123',
  userId: 'user-456'
});

// Consuming event in another service
messageQueue.subscribe('order.created', async (event) => {
  await updateInventory(event.orderId);
});
\`\`\`

## Maintaining Velocity During Migration

1. **Feature flags**: Deploy services behind flags
2. **Dual writes**: Write to both old and new systems temporarily
3. **Automated testing**: Comprehensive integration tests
4. **Gradual rollout**: Test with small user percentage first

## Lessons Learned

- Start small with non-critical services
- Invest in observability early (logging, tracing, metrics)
- Don't underestimate operational overhead
- Team structure should mirror architecture (Conway's Law)

## Conclusion

Microservices aren't a silver bullet. Ensure your organization has the maturity to support them before migrating.
        `
    },
    {
        id: 'p3',
        title: 'Testing Strategies for Frontend Teams',
        slug: 'testing-strategies-frontend',
        excerpt: 'Balancing unit, integration and e2e tests to ship with confidence without slowing down the team.',
        date: '2024-05-20',
        tags: ['testing', 'frontend'],
        cover: '/blog/testing-frontend.png',
        content: `
# Testing Strategies for Frontend Teams

Finding the right balance between test coverage and development velocity is crucial for frontend teams.

## The Testing Pyramid

\`\`\`
      /\\
     /E2E\\
    /------\\
   /  Integ \\
  /----------\\
 /    Unit    \\
/--------------\\
\`\`\`

### Unit Tests (70%)
Fast, isolated tests for individual functions and components.

### Integration Tests (20%)
Test how components work together.

### E2E Tests (10%)
Full user workflows from UI to backend.

## Unit Testing Components

Use React Testing Library for better maintainability:

\`\`\`typescript
import { render, screen } from '@testing-library/react';
import { ProjectCard } from './ProjectCard';

test('renders project title and description', () => {
  render(
    <ProjectCard 
      title="My Project"
      description="A cool project"
    />
  );
  
  expect(screen.getByText('My Project')).toBeInTheDocument();
  expect(screen.getByText('A cool project')).toBeInTheDocument();
});
\`\`\`

## Integration Testing

Test component interactions and data flow:

\`\`\`typescript
test('filters projects by tag', async () => {
  render(<ProjectsSection />);
  
  const filterButton = screen.getByRole('button', { name: 'Next.js' });
  await user.click(filterButton);
  
  const projects = screen.getAllByRole('article');
  expect(projects).toHaveLength(2); // Only Next.js projects
});
\`\`\`

## E2E Testing with Playwright

Critical user journeys only:

\`\`\`typescript
import { test, expect } from '@playwright/test';

test('user can submit contact form', async ({ page }) => {
  await page.goto('/');
  await page.click('a[href="#contact"]');
  
  await page.fill('input[name="name"]', 'John Doe');
  await page.fill('input[name="email"]', 'john@example.com');
  await page.fill('textarea[name="message"]', 'Hello!');
  
  await page.click('button[type="submit"]');
  
  await expect(page.locator('text=Message sent')).toBeVisible();
});
\`\`\`

## Best Practices

### 1. Test Behavior, Not Implementation
❌ Bad: \`expect(component.state.counter).toBe(5)\`
✅ Good: \`expect(screen.getByText('Count: 5')).toBeInTheDocument()\`

### 2. Use Data-Testid Sparingly
Prefer semantic queries (role, label, text) over test IDs.

### 3. Mock External Dependencies
Mock API calls, third-party services, and heavy computations.

\`\`\`typescript
vi.mock('@/lib/api', () => ({
  fetchProjects: vi.fn(() => Promise.resolve(mockProjects))
}));
\`\`\`

### 4. Snapshot Tests with Caution
They break often and can create false confidence. Use for:
- Error messages
- Complex computed output
- Generated HTML/emails

## Continuous Integration

Run tests on every PR:

\`\`\`yaml
name: Tests
on: [pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: npm test
      - run: npm run test:e2e
\`\`\`

## Metrics to Track

- **Code coverage**: Aim for 80%+ but don't obsess
- **Test execution time**: Keep under 5 minutes
- **Flaky test rate**: Should be < 1%

## Conclusion

Good testing isn't about 100% coverage—it's about confidence to ship. Focus on critical paths and maintain fast feedback loops.
        `
    }
];

export default posts;

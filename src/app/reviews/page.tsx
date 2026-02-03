import { TestimonialCard } from '@/components/reviews/testimonial-card';
import { getAllTestimonials, getUserById } from '@/lib/data';

export default function ReviewsPage() {
    const testimonials = getAllTestimonials();

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Testimonials</h1>
                <p className="text-muted-foreground">See what others are saying about members of our community.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map(({testimonial, recipient}) => {
                    const author = getUserById(testimonial.authorId);
                    if (!author || !recipient) return null;

                    return (
                        <TestimonialCard 
                            key={testimonial.id}
                            testimonial={testimonial}
                            author={author}
                            recipient={recipient}
                        />
                    )
                })}
            </div>
        </div>
    )
}

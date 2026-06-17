import { Client } from '@/payload-types'
import PayloadImage from '../ui/PayloadImage'

interface ClientsProps {
  clients: Client[]
}

export default function Clients({ clients }: ClientsProps) {
  return (
    <section className="sec">
      <div className="container">
        <div className="eyebrow">Our Clients</div>
        <h2 className="display md">Our Clients</h2>
        <p className="lead sec-lead">
          Long-standing partnerships with the operators and yards driving the Asia-Pacific Oil &amp; Gas industry.
        </p>
        <div className="clients-row">
          {clients.map((client) => (
            <div
              className="client-cell"
              key={client.id || client.name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                minHeight: '120px',
              }}
            >
              {client.logo && (
                <div style={{ position: 'relative', width: '120px', height: '40px' }}>
                  <PayloadImage
                    image={client.logo}
                    fill
                    style={{ objectFit: 'contain' }}
                    alt={client.name}
                  />
                </div>
              )}
              <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-fg-muted)' }}>
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}